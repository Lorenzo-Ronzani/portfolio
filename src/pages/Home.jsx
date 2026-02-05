const Home = () => {
  return (
    <div className="w-xl px-6 py-5">
      <section>
        <div>
          <p className="mb-4 text-lg/10">
            I'm currently studying Software Development at Bow Valley College in
            Calgary, Canada and am starting to build my first
            programming-related portfolio.
          </p>
          <p className="mb-4 text-lg/10">
            My passion for technology, especially programming, led me to enter
            this field. I took some independent programming language courses
            over the past few years, and after gaining a solid but superficial
            foundation, I decided it was time for formal education in the area.
            I have always dreamed of having an experience living outside my home
            country, which is why I combined everything into one plan: living
            and studying abroad.
          </p>
          <p className="mb-4 text-lg/10">
            I have a degree in Business Administration from FEI University
            Center in São Bernardo do Campo, Brazil. I worked for 3 years in the
            commercial area, where I was able to improve my skills with
            spreadsheets, the development of indicators, and interpersonal
            relationships.
          </p>
          <p className="mb-4 text-lg/10">
            In my free time, I enjoy traveling and spending quality time with my
            friends and family, playing video games, and engaging in outdoor
            activities.
          </p>
        </div>
      </section>
      <section>
        <div className="mt-28 flex-col">
          <ol>
            <li className="mb-14">
              <div>
                <div>
                  <header className="">2026 — April</header>
                  <div>
                    <h3 className="font-medium">
                      <div>
                        <a
                          href=""
                          className="inline-flex items-baseline text-base leading-tight font-medium hover:text-teal-300"
                        >
                          <span>
                            Front End Developer <span> · </span>
                            <span className="inline-block">Happy Cramps</span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-3 text-sm">
                      Provided excellent customer service. Processing and
                      stocking all fashion merchandise. Maintain merchandise
                      standards, such as the integrity of modules and signage.
                    </p>
                    <ul className="mt-2 flex">
                      <li className="mt-2 mr-2">
                        <div className="flex justify-center rounded-full bg-teal-500/25 px-4 py-1 text-sm font-medium text-teal-300">
                          JavaScript
                        </div>
                      </li>
                      <li className="mt-2 mr-2">
                        <div className="font-mediumflex justify-center rounded-full bg-teal-500/25 px-4 py-1 text-sm text-teal-300">
                          React
                        </div>
                      </li>
                      <li className="mt-2 mr-2">
                        <div className="font-mediumflex justify-center rounded-full bg-teal-500/25 px-4 py-1 text-sm text-teal-300">
                          Tailwind
                        </div>
                      </li>
                    </ul>
                  </div>
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
