import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import './FAQ.css';

const FAQ = () => {
  const { language } = useLanguage();
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
        question: "Կայքի արժե կայքի ստեղծումը։",
        answer: "Մեր գները սկսվում են $400-ից հասարակ լենդինգի համար։ Ստանդարտ կայքերը արժենան $800, իսկ պրեմիում նախագծերը՝ $1500-ից։"
      },
      {
        question: "Կայքի ստեղծումը ինչքան ժամանակ է պահանջում։",
        answer: "Հասարակ լենդինգը պահանջում է 5-7 աշխատանքային օր։ Ստանդարտ կայքերը՝ 2-3 շաբաթ, իսկ բարդ նախագծերը՝ 4-6 շաբաթ։"
      },
      {
        question: "Ինչ է ներառված գնի մեջ։",
        answer: "Բոլոր փաթեթները ներառում են ադապտիվ դիզայն, SEO օպտիմալացում, կապի ձևեր և 30 օր անվճար աջակցություն։"
      },
      {
        question: "Դուք տրամադրում եք հոսթինգ և դոմեն։",
        answer: "Մենք օգնում ենք ընտրել և կարգավորել հոսթինգ և դոմեն։ Վճարները վճարվում են առանձին, բայց մենք ուղեկցում ենք ձեզ։"
      },
      {
        question: "Կարող եմ փոփոխություններ կատարել կայքի ավարտից հետո։",
        answer: "Այո։ Մենք տրամադրում ենք 30-60 օր անվճար աջակցություն։ Դրանից հետո առաջարկում ենք մատչելի սպասարկման պլաններ։"
      },
      {
        question: "Ինչ տեղեկություն է անհրաժեստ սկսելու համար։",
        answer: "Մեզ անհրաժեստ է ձեր լոգոն (եթե կա), բրենդի գույները, տեքստային բովանդակությունը, նկարները և ընդհանուր պատկերացումը։"
      }
    ]
  };

  const currentFaq = faqData[language] || faqData.en;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {language === 'ru' ? 'Часто задаваемые' : language === 'am' ? 'Հաճախ տրվող' : 'Frequently Asked'}{' '}
            <span className="gold-text">
              {language === 'ru' ? 'вопросы' : language === 'am' ? 'հարցեր' : 'Questions'}
            </span>
          </h2>
          <p className="section-subtitle">
            {language === 'ru'
              ? 'Ответы на популярные вопросы о наших услугах'
              : language === 'am'
              ? 'Պատասխաններ հաճախ տրվող հարցերին'
              : 'Answers to common questions about our services'}
          </p>
        </div>

        <div className="faq-list">
          {currentFaq.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
