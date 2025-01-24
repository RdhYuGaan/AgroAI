const About = () => {
    return (
      <section className="about-us-section">
        <div className="content">
          <h2>About us</h2>
          <p>
            AgroAI is at the forefront of agricultural technology, merging artificial intelligence with traditional farming practices.
            Our team of experts in IoT, AI, and agriculture is dedicated to building smart solutions to improve the productivity and
            sustainability of your crops. With years of experience in AI and IoT development, our goal is to make farming more
            efficient, cost-effective, and environmentally sustainable.
          </p>
        </div>
        {/* Correctly place the style attribute */}
        <div
          className="min-h-screen flex flex-col bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/tea-estate.jpg)' }}
        ></div>
      </section>
    );
  };
  
  export default About;
  