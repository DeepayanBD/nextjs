'use client'

import Image from "next/image";
import contactImage from "@/public/assets/images/message.png";

import { Box, Grid, Button, Container, TextField, Typography } from "@mui/material";

import { RouterLink } from "src/routes/components";

import { Iconify } from "src/components/iconify";

const contacts = [
  {
    icon: "uil:phone",
    title: "Phone",
    details: `If you have an inquiry please call us in necessary.`,
    link: "tel:+8801799015558",
    content: "+880 17990-15558",
  },
  {
    icon: "uil:envelope",
    title: "Email",
    details: `You can contact throught e-mail for help and support.`,
    link: "mailto:saifullah71tv@gmail.com",
    content: "saifullah71tv@gmail.com",
  },
  {
    icon: "uil:map-marker",
    title: "Location",
    details:
      "8/7A Borobag (Azmat Garments Opposite Road), Mirpur - 2, Dhaka - 1216, Bangladesh",
    link: "https://maps.app.goo.gl/PTpdsMZ8dKH4inxh8",
    content: "View on Google map",
  },
];

export default function ContactsDetails() {
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
              Get in touch!
            </Typography>
            <form>
              <TextField
                required
                label="Name"

                fullWidth
                sx={{ mb: 2 }} />
              <TextField
                required
                label="Email"

                fullWidth
                sx={{ mb: 2 }} />
              <TextField
                required
                label="Subject"

                fullWidth
                sx={{ mb: 2 }} />
              <TextField
                required
                label="Message"

                fullWidth
                multiline
                rows={4}
                sx={{ mb: 2 }} />
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
