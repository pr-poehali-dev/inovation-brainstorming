import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких городах вы работаете?",
    answer:
      "Наша студия базируется в Чебоксарах и работает по всей Чувашской Республике — Новочебоксарск, Канаш, Алатырь и другие города. При необходимости выезжаем в соседние регионы.",
  },
  {
    question: "Сколько времени занимает проектирование?",
    answer:
      "Сроки зависят от масштаба объекта. Проект частного дома занимает от 2 до 4 месяцев, коммерческие объекты — от 3 до 6 месяцев. Мы чётко фиксируем сроки в договоре и придерживаемся их.",
  },
  {
    question: "Вы занимаетесь только проектированием или и строительством тоже?",
    answer:
      "Мы специализируемся на архитектурном проектировании и авторском надзоре. При желании помогаем с подбором надёжных строительных подрядчиков в Чувашии из нашей партнёрской сети.",
  },
  {
    question: "Какие документы вы разрабатываете?",
    answer:
      "Эскизный проект, рабочая документация, проект для получения разрешения на строительство. При необходимости сопровождаем прохождение экспертизы и согласования в государственных органах.",
  },
  {
    question: "Беретесь ли вы за реконструкцию и перепланировку?",
    answer:
      "Да, мы работаем с существующими зданиями — реконструкция, надстройка, перепланировка. Оцениваем состояние объекта, предлагаем решения и разрабатываем всю необходимую документацию.",
  },
  {
    question: "Как начать сотрудничество с AABA Architects?",
    answer:
      "Свяжитесь с нами любым удобным способом — позвоните, напишите в мессенджер или заполните форму на сайте. На первой встрече обсудим ваш объект, задачи и бюджет, после чего подготовим коммерческое предложение.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}