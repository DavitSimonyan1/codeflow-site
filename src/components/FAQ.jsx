import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import './FAQ.css';

const FAQ = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    en: [
      {
        question: "How much does a website cost?",
        answer: "Our pricing starts at $400 for a basic landing page. Standard websites with multiple pages cost $800, and premium projects with advanced features start at $1500. The final price depends on your specific requirements and project complexity."
      },
      {
        question: "How long does it take to create a website?",
        answer: "A basic landing page takes 5-7 business days. Standard websites take 2-3 weeks, and complex premium projects may take 4-6 weeks. We always discuss timelines before starting the project."
      },
      {
        question: "What is included in the price?",
        answer: "All our packages include responsive design, SEO optimization, contact forms, and 30 days of free support after launch. Higher tiers include additional features like animations, CMS integration, and extended support."
      },
      {
        question: "Do you provide hosting and domain?",
        answer: "We help you choose and set up hosting and domain registration. Hosting and domain fees are paid separately by the client, but we guide you through the entire process."
      },
      {
        question: "Can I make changes after the website is finished?",
        answer: "Yes! We provide 30-60 days of free support depending on your package. After that, we offer affordable maintenance plans or can teach you how to make basic updates yourself."
      },
      {
        question: "What information do you need to start?",
        answer: "We need your logo (if available), brand colors, text content, images, and a general idea of what you want. Don't worry if you don't have everything - we can help you figure it out!"
      }
    ],
    ru: [
      {
        question: "Сколько стоит создание сайта?",
        answer: "Наши цены начинаются от $400 за базовый лендинг. Стандартные сайты с несколькими страницами стоят $800, а премиум-проекты с расширенным функционалом — от $1500. Итоговая цена зависит от ваших требований и сложности проекта."
      },
      {
        question: "Сколько времени занимает создание сайта?",
        answer: "Базовый лендинг занимает 5-7 рабочих дней. Стандартные сайты — 2-3 недели, а сложные премиум-проекты могут занять 4-6 недель. Мы всегда обсуждаем сроки до начала работы."
      },
      {
        question: "Что входит в стоимость?",
        answer: "Все наши пакеты включают адаптивный дизайн, SEO-оптимизацию, контактные формы и 30 дней бесплатной поддержки после запуска. Более высокие тарифы включают дополнительные функции: анимации, интеграцию CMS и расширенную поддержку."
      },
      {
        question: "Вы предоставляете хостинг и домен?",
        answer: "Мы помогаем выбрать и настроить хостинг и регистрацию домена. Оплата хостинга и домена производится клиентом отдельно, но мы сопровождаем вас на всех этапах."
      },
      {
        question: "Можно ли вносить изменения после завершения сайта?",
        answer: "Да! Мы предоставляем 30-60 дней бесплатной поддержки в зависимости от пакета. После этого мы предлагаем доступные тарифы на обслуживание или можем научить вас вносить базовые изменения самостоятельно."
      },
      {
        question: "Какая информация нужна для начала работы?",
        answer: "Нам нужен ваш логотип (если есть), фирменные цвета, текстовый контент, изображения и общее представление о том, что вы хотите. Не переживайте, если у вас нет всего — мы поможем разобраться!"
      }
    ],
    am: [
      {
        question: "\u053F\u0561\u0575\u0584\u056B \u0561\u0580\u056A\u0565 \u056F\u0561\u0575\u0584\u056B \u057D\u057F\u0565\u0572\u056E\u0578\u0582\u0574\u0568\u0589",
        answer: "\u0544\u0565\u0580 \u0563\u0576\u0565\u0580\u0568 \u057D\u056F\u057D\u057E\u0578\u0582\u0574 \u0565\u0576 $400-\u056B\u0581 \u0570\u0561\u057D\u0561\u0580\u0561\u056F \u056C\u0565\u0576\u0564\u056B\u0576\u0563\u056B \u0570\u0561\u0574\u0561\u0580\u0589 \u054D\u057F\u0561\u0576\u0564\u0561\u0580\u057F \u056F\u0561\u0575\u0584\u0565\u0580\u0568 \u0561\u0580\u056A\u0565\u0576\u0561\u0576 $800, \u056B\u057D\u056F \u057A\u0580\u0565\u0574\u056B\u0578\u0582\u0574 \u0576\u0561\u056D\u0561\u0563\u056E\u0565\u0580\u0568\u055D $1500-\u056B\u0581\u0589"
      },
      {
        question: "\u053F\u0561\u0575\u0584\u056B \u057D\u057F\u0565\u0572\u056E\u0578\u0582\u0574\u0568 \u056B\u0576\u0579\u0584\u0561\u0576 \u056A\u0561\u0574\u0561\u0576\u0561\u056F \u0567 \u057A\u0561\u0570\u0561\u0576\u057B\u0578\u0582\u0574\u0589",
        answer: "\u0540\u0561\u057D\u0561\u0580\u0561\u056F \u056C\u0565\u0576\u0564\u056B\u0576\u0563\u0568 \u057A\u0561\u0570\u0561\u0576\u057B\u0578\u0582\u0574 \u0567 5-7 \u0561\u0577\u056D\u0561\u057F\u0561\u0576\u0584\u0561\u0575\u056B\u0576 \u0585\u0580\u0589 \u054D\u057F\u0561\u0576\u0564\u0561\u0580\u057F \u056F\u0561\u0575\u0584\u0565\u0580\u0568\u055D 2-3 \u0577\u0561\u0562\u0561\u0569, \u056B\u057D\u056F \u0562\u0561\u0580\u0564 \u0576\u0561\u056D\u0561\u0563\u056E\u0565\u0580\u0568\u055D 4-6 \u0577\u0561\u0562\u0561\u0569\u0589"
      },
      {
        question: "\u053B\u0576\u0579 \u0567 \u0576\u0565\u0580\u0561\u057C\u057E\u0561\u056E \u0563\u0576\u056B \u0574\u0565\u057B\u0589",
        answer: "\u0532\u0578\u056C\u0578\u0580 \u0583\u0561\u0569\u0565\u0569\u0576\u0565\u0580\u0568 \u0576\u0565\u0580\u0561\u057C\u0578\u0582\u0574 \u0565\u0576 \u0561\u0564\u0561\u057A\u057F\u056B\u057E \u0564\u056B\u0566\u0561\u0575\u0576, SEO \u0585\u057A\u057F\u056B\u0574\u0561\u056C\u0561\u0581\u0578\u0582\u0574, \u056F\u0561\u057A\u056B \u0571\u0587\u0565\u0580 \u0587 30 \u0585\u0580 \u0561\u0576\u057E\u0573\u0561\u0580 \u0561\u057B\u0561\u056F\u0581\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0589"
      },
      {
        question: "\u0534\u0578\u0582\u0584 \u057F\u0580\u0561\u0574\u0561\u0564\u0580\u0578\u0582\u0574 \u0565\u0584 \u0570\u0578\u057D\u0569\u056B\u0576\u0563 \u0587 \u0564\u0578\u0574\u0565\u0576\u0589",
        answer: "\u0544\u0565\u0576\u0584 \u0585\u0563\u0576\u0578\u0582\u0574 \u0565\u0576\u0584 \u0568\u0576\u057F\u0580\u0565\u056C \u0587 \u056F\u0561\u0580\u0563\u0561\u057E\u0578\u0580\u0565\u056C \u0570\u0578\u057D\u0569\u056B\u0576\u0563 \u0587 \u0564\u0578\u0574\u0565\u0576\u0589 \u054E\u0573\u0561\u0580\u0576\u0565\u0580\u0568 \u057E\u0573\u0561\u0580\u057E\u0578\u0582\u0574 \u0565\u0576 \u0561\u057C\u0561\u0576\u0571\u056B\u0576, \u0562\u0561\u0575\u0581 \u0574\u0565\u0576\u0584 \u0578\u0582\u0572\u0565\u056F\u0581\u0578\u0582\u0574 \u0565\u0576\u0584 \u0571\u0565\u0566\u0589"
      },
      {
        question: "\u053F\u0561\u0580\u0578\u0572 \u0565\u0574 \u0583\u0578\u0583\u0578\u056D\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580 \u056F\u0561\u057F\u0561\u0580\u0565\u056C \u056F\u0561\u0575\u0584\u056B \u0561\u057E\u0561\u0580\u057F\u056B\u0581 \u0570\u0565\u057F\u0578\u0589",
        answer: "\u0531\u0575\u0578\u0589 \u0544\u0565\u0576\u0584 \u057F\u0580\u0561\u0574\u0561\u0564\u0580\u0578\u0582\u0574 \u0565\u0576\u0584 30-60 \u0585\u0580 \u0561\u0576\u057E\u0573\u0561\u0580 \u0561\u057B\u0561\u056F\u0581\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0589 \u0534\u0580\u0561\u0576\u056B\u0581 \u0570\u0565\u057F\u0578 \u0561\u057C\u0561\u057B\u0561\u0580\u056F\u0578\u0582\u0574 \u0565\u0576\u0584 \u0574\u0561\u057F\u0579\u0565\u056C\u056B \u057D\u057A\u0561\u057D\u0561\u0580\u056F\u0574\u0561\u0576 \u057A\u056C\u0561\u0576\u0576\u0565\u0580\u0589"
      },
      {
        question: "\u053B\u0576\u0579 \u057F\u0565\u0572\u0565\u056F\u0578\u0582\u0569\u0575\u0578\u0582\u0576 \u0567 \u0561\u0576\u0570\u0580\u0561\u056A\u0565\u057D\u057F \u057D\u056F\u057D\u0565\u056C\u0578\u0582 \u0570\u0561\u0574\u0561\u0580\u0589",
        answer: "\u0544\u0565\u0566 \u0561\u0576\u0570\u0580\u0561\u056A\u0565\u057D\u057F \u0567 \u0571\u0565\u0580 \u056C\u0578\u0563\u0578\u0576 (\u0565\u0569\u0565 \u056F\u0561), \u0562\u0580\u0565\u0576\u0564\u056B \u0563\u0578\u0582\u0575\u0576\u0565\u0580\u0568, \u057F\u0565\u0584\u057D\u057F\u0561\u0575\u056B\u0576 \u0562\u0578\u057E\u0561\u0576\u0564\u0561\u056F\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568, \u0576\u056F\u0561\u0580\u0576\u0565\u0580\u0568 \u0587 \u0568\u0576\u0564\u0570\u0561\u0576\u0578\u0582\u0580 \u057A\u0561\u057F\u056F\u0565\u0580\u0561\u0581\u0578\u0582\u0574\u0568\u0589"
      }
    ]
  };

  const currentFaq = faqData[language] || faqData.en;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {language === 'ru' ? 'Часто задаваемые' : language === 'am' ? '\u0540\u0561\u0573\u0561\u056D \u057F\u0580\u057E\u0578\u0572' : 'Frequently Asked'}{' '}
            <span className="gold-text">
              {language === 'ru' ? 'вопросы' : language === 'am' ? '\u0570\u0561\u0580\u0581\u0565\u0580' : 'Questions'}
            </span>
          </h2>
          <p className="section-subtitle">
            {language === 'ru'
              ? 'Ответы на популярные вопросы о наших услугах'
              : language === 'am'
              ? '\u054A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u0576\u0565\u0580 \u0570\u0561\u0573\u0561\u056D \u057F\u0580\u057E\u0578\u0572 \u0570\u0561\u0580\u0581\u0565\u0580\u056B\u0576'
              : 'Answers to common questions about our services'}
          </p>
        </motion.div>

        <div className="faq-list">
          {currentFaq.map((item, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>{item.question}</span>
                <div className="faq-icon">
                  {openIndex === index ? <HiMinus /> : <HiPlus />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
