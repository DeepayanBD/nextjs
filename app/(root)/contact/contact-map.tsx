export default function ContactMap() {
  return (
    <div className="container-fluid relative">
      <div className="grid grid-cols-1">
        <div className="w-full leading-[0] border-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d456.3194012156227!2d90.36215529172549!3d23.798848253602436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1714939046029!5m2!1sen!2sbd"
            style={{ border: 0 }}
            className="w-full h-[500px]"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
