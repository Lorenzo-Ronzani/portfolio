const Home = () => {
  return (
    <div className="w-xl px-6 py-5">
      <section>
        <div>
          <p className="mb-6 text-lg/10">
            I'm currently studying Software Development at Bow Valley College in
            Calgary, Canada and am starting to build my first
            programming-related portfolio.
          </p>
          <p className="mb-6 text-lg/10">
            My passion for technology, especially programming, led me to enter
            this field. I took some independent programming language courses
            over the past few years, and after gaining a solid but superficial
            foundation, I decided it was time for formal education in the area.
            I have always dreamed of having an experience living outside my home
            country, which is why I combined everything into one plan: living
            and studying abroad.
          </p>
          <p className="mb-6 text-lg/10">
            I have a degree in Business Administration from FEI University
            Center in São Bernardo do Campo, Brazil. I worked for 3 years in the
            commercial area, where I was able to improve my skills with
            spreadsheets, the development of indicators, and interpersonal
            relationships.
          </p>
          <p className="mb-6 text-lg/10">
            In my free time, I enjoy traveling and spending quality time with my
            friends and family, playing video games, and engaging in outdoor
            activities.
          </p>
        </div>
      </section>
      <section id="experience" class="experience">
        <div class="experience-container">
          <ol class="experience-list">
            <li>
              <div>
                <div class="experiences">
                  <div id="exp">
                    <p>November 2024 - Present</p>
                    <h3>
                      <div>
                        <a href="https://www.walmart.ca/en" target="_blank">
                          Fashion Associate - Walmart
                        </a>
                      </div>
                    </h3>
                    <p>
                      Provided excellent customer service. Processing and
                      stocking all fashion merchandise. Maintain merchandise
                      standards, such as the integrity of modules and signage.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div class="experiences">
                  <p>2024 - July 2024</p>
                  <h3>
                    <div>
                      <a href="https://www.fixoved.com.br/" target="_blank">
                        Sales Assistant - Fixoved
                      </a>
                    </div>
                  </h3>
                  <p>
                    Used Onix sales systems to track inventory levels and
                    properly restock shelves with the purchasing team.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div class="experiences">
                  <p>2021 - 2023</p>
                  <h3>
                    <div>
                      <a
                        href="https://www.flashcourier.com.br/"
                        target="_blank"
                      >
                        Comercial Analyst - Flash Courier
                      </a>
                    </div>
                  </h3>
                  <p>
                    Developed and presented indicators to international clients
                    using Power BI, Excel, and PowerPoint.Provided excellent
                    customer service to clients in person, over the phone and by
                    e-mail, understanding the customer's needs.
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div class="resume">
          <a href="resumepage.pdf" target="_blank">
            View Full Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
