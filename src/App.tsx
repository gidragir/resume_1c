import "./scss/index.scss"
import "./css/font-awesome.min.css"

import resume from "./assets/Ilya Balter.pdf"
import me from "./assets/me.jpeg"
import certs from "./assets/certs"
import links from "./assets/links"
import skills from "./assets/skills"
import experiences from "./assets/experiences"
interface linkProps {
  href: string
  type: string
  svg: string
}
interface skillProps {
  name: string
  description: string
}
interface experienceProps {
  periodStart: string
  periodEnd: string
  company: string
  description: string
}

function App() {
  const linksData: linkProps[] = links.data as linkProps[]
  const skillsData: skillProps[] = skills.data as skillProps[]
  const experiencesData: experienceProps[] =
    experiences.data as experienceProps[]
  const certsData: string[] = certs.data as string[]

  return (
    <div className="content">
      <section className="info md:max-w-screen-2xl">
        <div className="flex flex-wrap justify-center">
          <div className="md:shrink-0">
            <div className="shadow-sm shadow-black">
              <img
                className="h-48 rounded-sm md:h-full md:w-48"
                src={me}
                alt=""
              />
            </div>

            <div className="border-2 mt-4 md:mt-14 border-stone-300 rounded-sm text-center bg-zinc-300 shadow-sm shadow-black p-2">
              <a href={resume} download>
                Скачать резюме
              </a>
            </div>
          </div>

          <div className="profile">
            <div className="mt-4">
              <span className="text-[30px]">Балтер Илья Николаевич</span>
            </div>

            <div>
              <span>
                Являюсь сертифицированным разработчиком 1С. Основной язык
                программирования является 1С. Обладаю обширным опытом разработки
                обменов, интеграций, новых модулей и отчетов.
              </span>
              <br />
              <span>
                Работаю самостоятельно. Имею опыт взаимодействия с заказчиками и
                составления технических заданий с нуля.
              </span>
              <br />
              <span>
                Для меня в работе важны постоянный поток задач и
                профессиональное развитие.
              </span>
            </div>

            <div className="">
              <div className="facts">
                <div className="fact">
                  <span>Номер телефона</span>
                  <span>8 (702) 744 99 52</span>
                </div>
                <div className="fact">
                  <span>Почта</span>
                  <span>ilyabalter@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="">
              <ul className="ul-social-links space-x-2">
                {linksData.map((link, index) => {
                  return (
                    <li key={index} className="li-social-links">
                      <a href={link.href}>
                        {link.type == "svg" ? (
                          <img
                            className="inline-block"
                            width="20px"
                            height="17.55px"
                            src={link.svg}
                            alt=""
                          />
                        ) : (
                          <i
                            className={"fa " + link.svg}
                            aria-hidden="true"
                          ></i>
                        )}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="header-section">
          <h2>НАВЫКИ</h2>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row">
          {skillsData.map((skill, index) => {
            return <SkillCard key={index} {...skill} />
          })}
        </div>
      </section>

      <section>
        <div className="header-section">
          <h2>КАРЬЕРА</h2>
        </div>

        <div className="md:ml-20 relative px-4 lg:w-5/6">
          <div className="all-experience">
            {experiencesData.map((experience, index) => {
              return <ExperienceCard key={index} {...experience} />
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="header-section">
          <h2>СЕРТИФИКАТЫ</h2>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row justify-around items-center">
          {certsData.map((cert, index) => {
            return (
              <img key={index} className="h-[25rem] pt-3 md:p-4" src={cert} />
            )
          })}
        </div>
      </section>
    </div>
  )
}

function SkillCard({ name, description }: skillProps): JSX.Element {
  return (
    <div className="skill">
      <div>
        <div>
          <h3>{name}</h3>
        </div>

        <span>{description}</span>
      </div>
    </div>
  )
}

function ExperienceCard({
  periodStart,
  periodEnd,
  company,
  description,
}: experienceProps): JSX.Element {
  return (
    <div className="info experience-content">
      <span className="period-experience">
        {periodStart} <br className="hidden md:block" /> <p className="inline-block md:hidden"> - </p> {periodEnd}
      </span>
      <h3 className="specialty-name">{company}</h3>
      <p className="prg-experience">{description}</p>
    </div>
  )
}

export default App
