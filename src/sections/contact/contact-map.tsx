import { Box, Grid, Container } from "@mui/material";

export default function ContactMap() {
  return (
    <Container maxWidth={false} disableGutters>
      <Grid container>
        <Grid item xs={12}>
          <Box component="div" sx={{ width: '100%', border: 0, lineHeight: 0 }}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d456.3194012156227!2d90.36215529172549!3d23.798848253602436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1714939046029!5m2!1sen!2sbd"
              style={{ border: 0, width: '100%', height: '600px' }}
              allowFullScreen
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
