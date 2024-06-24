"use client"
// import  Navbar  from "../Components/navbar"
import Hero from "../hero";

 
function About() {
    return <>
    <Hero />
    
      <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Us</h1>
      <p className="text-lg mb-6 text-gray-700">
        Welcome to our website, your dedicated platform for raising awareness and taking action against the ongoing injustices in Israel. Our mission is to educate, inform, and empower individuals around the world to join the movement in boycotting Israeli products and supporting the rights of the Palestinian people.
      </p>
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Why Boycott Israeli Products?</h2>
      <p className="text-lg mb-4 text-gray-700">
        The Boycott, Divestment, and Sanctions (BDS) movement calls for peaceful measures to pressure Israel to comply with international law and respect Palestinian rights. By boycotting Israeli products, we:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li className="mb-2"><strong>Stand Against Injustice:</strong> We oppose the occupation of Palestinian territories and the violation of human rights. Boycotting Israeli products is a non-violent way to protest against these injustices.</li>
        <li className="mb-2"><strong>Promote Equality:</strong> Our efforts aim to bring about a just and equal society where all people, regardless of their nationality or ethnicity, are treated with dignity and respect.</li>
        <li className="mb-2"><strong>Support Palestinian Rights:</strong> Boycotting is a tangible way to support the Palestinian struggle for freedom, justice, and equality. It sends a strong message that the international community will not tolerate oppression.</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Commitment</h2>
      <p className="text-lg mb-4 text-gray-700">
        Our website provides comprehensive information on Israeli products to boycott, alternative products to support, and the impact of the boycott movement. We are committed to:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li className="mb-2"><strong>Awareness:</strong> Educating the public on the reasons for and the importance of the boycott.</li>
        <li className="mb-2"><strong>Transparency:</strong> Offering accurate and up-to-date information on companies and products related to Israel.</li>
        <li className="mb-2"><strong>Support:</strong> Providing resources and tools to help individuals make informed choices and take meaningful action.</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Join Us</h2>
      <p className="text-lg mb-4 text-gray-700">
        We believe that collective action can lead to meaningful change. Every purchase matters, and by choosing to boycott Israeli products, you contribute to the global effort to end the occupation and support human rights.
      </p>
      <p className="text-lg mb-4 text-gray-700">
        Together, we can make a difference. Explore our website to learn more about the products to boycott, find alternatives, and join the movement for justice and peace.
      </p>
    </div>
    <div className="container w-100"  >
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-body-secondary">#Boycott-Israil-Products</p>
      
          
      
          <p> if you want to contribute visit here <a href="https://github.com/allIsrailProducts/frontend" target="_blank" style={{color:"red"}}>GITHUB</a></p>
        </footer>
      </div>
    
    </>;
}

export default About;