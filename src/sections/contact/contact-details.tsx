'use client'

import Image from "next/image";
import contactImage from "@/public/assets/images/message.png";

import { Box, Grid, Button, Container, TextField, Typography } from "@mui/material";

import { RouterLink } from "src/routes/components";

import { useTranslate } from "src/locales";

import { Iconify } from "src/components/iconify";

export default function ContactsDetails() {
  const { t } = useTranslate('contact');

  const contacts = [
    {
      icon: "uil:phone",
      title: t("phone.title"), // translation key for phone title
      details: t("phone.details"), // translation key for phone details
      link: "tel:+8801799015558",
      content: "+880 17990-15558",
    },
    {
      icon: "uil:envelope",
      title: t("email.title"), // translation key for email title
      details: t("email.details"), // translation key for email details
      link: "mailto:saifullah71tv@gmail.com",
      content: "saifullah71tv@gmail.com",
    },
    {
      icon: "uil:map-marker",
      title: t("location.title"), // translation key for location title
      details: t("location.details"), // translation key for location details
      link: "https://maps.app.goo.gl/PTpdsMZ8dKH4inxh8",
      content: t("location.content"), // translation key for location content (e.g., "View on Google map")
    },
  ];

  return (
    <Container component="section" sx={{ position: 'relative', py: { xs: 4, md: 6 }, px: { xs: 2, md: 6 } }}>
      <Grid container justifyContent="space-evenly" spacing={4}>
        {contacts.map(({ content, details, icon, link, title }, index) => (
          <Grid key={index} item xs={12} md={6} lg={4} sx={{ textAlign: "center" }}>
            <Box sx={{ textAlign: "center", mt: 4, px: 4 }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  backgroundColor: "rgba(37, 99, 235, 0.1)", // Light blue background
                  color: "rgb(37, 99, 235)", // Dark blue text color
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 1, // MUI box shadow
                  margin: "0 auto",
                }}
              >
                <Iconify icon={icon} width={40} height={40} />
              </Box>
              <Box mt={2}>
                <Typography variant="h5" fontWeight="medium">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {details}
                </Typography>
                <Box mt={2}>
                  <Button
                    color="primary"
                    component={RouterLink}
                    href={link}
                  >
                    {content}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} sx={{ my: { md: 10, xs: 4 } }}>
        <Grid item xs={12} md={6} lg={7}>
          <Image src={contactImage} alt="Contact Image" width={500} height={500} placeholder="blur" />
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={{ padding: 3, bgcolor: 'background.paper', borderRadius: "8px", boxShadow: 2 }}>
            <Typography variant="h4" fontWeight="medium" mb={2}>
              {t("form.title")}
            </Typography>
            <form>
              <TextField
                required
                label={t("form.name")}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                required
                label={t("form.email")}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                required
                label={t("form.subject")}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                required
                label={t("form.message")}
                fullWidth
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
              <Button type="submit" variant="contained" color="primary">
                {t("form.sendMessage")} {/* "Send Message" */}
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
