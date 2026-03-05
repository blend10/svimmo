export default function MapSection() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/E-K+Bauunternehmung+GmbH/@47.1927261,8.7270816,17z";

  return (
    <section className="relative w-full h-screen ">
      {/* Full-screen map */}
      <iframe
        title="E-K Bauunternehmung GmbH"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d8.7270816!3d47.1927261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ab15d5b0f1c3f%3A0x7ad948fdd6dc0d0a!2sE-K%20Bauunternehmung%20GmbH!5e0!3m2!1sde!2sch!4v1700000000000!5m2!1sde!2sch"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 z-0 w-full h-full"
      />
    </section>
  );
}
