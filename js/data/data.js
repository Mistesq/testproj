import {initialState} from "../constants";
import BlockView from "../view/block-view";
import toggleLevel from "./toggleLevel";
import {renderScreen} from "../utils";

export const getBlockView = (state, level, callback) => {
      return new BlockView(state, level, callback).element;
  };

export const questions = [
  {
      question: `<article class="preview">
        <div class="preview__left">
          <img src="img/mobile.jpg" width="380" height="255" alt="Изображение интернет-магазина в телефоне" class="preview__img">
        </div>
        <div class="preview__right">
          <h2 class="preview__intro">Типы контента, которые вы можете публиковать в своем интернет-магазине</h2>
          <p class="preview__text">
            Грамотная контентная стратегия для интернет-магазина позволяет значительно увеличить объемы поискового трафика на сайт, за который предпринимателю нет необходимости платить. Это повышает рентабельность бизнеса, ускоряет его развитие и дает преимущество...
          </p>
        </div>
      </article>`,
      answers: ``
  },
  {
    question: `<section class="section">
      <h3 class="section__title">Эффективность контентной стратегии</h3>
      <p class="section__text">
        Грамотная контентная стратегия для интернет-магазина позволяет значительно увеличить объемы поискового трафика на сайт, за который предпринимателю нет необходимости платить. Это повышает рентабельность бизнеса, ускоряет его развитие и дает преимущество по сравнению с конкурентами.Поэтому выстраивать эффективную стратегию контент-маркетинга в современных реалиях просто необходимо.
      </p>
      <ul class="section__list advantages-list">
        <li class="advantages-list__item advantages-list__item--visitor">
          Улучшение <br>  посещаемости
        </li>
        <li class="advantages-list__item advantages-list__item--cart">
          Увеличение <br> количества продаж
        </li>
        <li class="advantages-list__item advantages-list__item--calculator">
          Рост <br> прибыли
        </li>
        <li class="advantages-list__item advantages-list__item--briefcase">
          Стабильность <br> бизнеса
        </li>
      </ul>
    </section>`,
    answers: `Это текст, который доступен посетителю на странице товара. Это может быть как качественно подготовленное описание, так и дополнительная информация: интересные факты, видеообзор, а также преимущества данного товара по сравнению с аналогами от конкурентов. Согласитесь, это будет гораздо интереснее, чем банальное описание технических характеристик.`
  },
  {
    question: `<section class="section">
      <h3 class="section__title">Информация о товаре</h3>
      <p class="section__text">Это текст, который доступен посетителю на странице товара. Это может быть как качественно подготовленное описание, так и дополнительная информация: интересные факты, видеообзор, а также преимущества данного товара по сравнению с аналогами от конкурентов. Согласитесь, это будет гораздо интереснее, чем банальное описание технических характеристик.</p>
    </section>`,
    answers: `Грамотная контентная стратегия для интернет-магазина позволяет значительно увеличить объемы поискового трафика на сайт, за который предпринимателю нет необходимости платить. Это повышает рентабельность бизнеса, ускоряет его развитие и дает преимущество по сравнению с конкурентами.Поэтому выстраивать эффективную стратегию контент-маркетинга в современных реалиях просто необходимо.`
  },
  {
    question: `<section class="section">
      <h3 class="section__title">Маркетинговый контент</h3>
      <p class="section__text">Речь идет о заметках и публикациях с информацией о скидках, распродажах, конкурсах и прочих акционных предложениях. Такой текст тоже необходимо тщательно прорабатывать, так как от стиля подачи во многом зависит и успех подобной акции. В современных реалиях вызвать интерес со стороны потенциального клиента не так уж и просто.</p>
    </section>`,
    answers: ``
  },
  {
    question: `<section class="section">
      <h3 class="section__title">Обзорные статьи</h3>
      <p class="section__text">Они могут быть самыми разными – от разъяснения особенностей той или иной технологии и до демонстрации вариантов применения гаджета или другого подобного устройства. Важно раскрывать тему и давать пользователю исчерпывающий ответ на интересующий его вопрос. И да, не забывайте отвечать на комментарии – коммуникация должна быть двухсторонней.</p>
    </section>`,
    answers: ``
  }
];

export const renderFirstGameScreen = () => {
  const firstLevel = questions[0];
  const firstGameScreen = new BlockView(initialState,
  firstLevel,
  toggleScreens).element;

  renderScreen(firstGameScreen);
};


export const toggleScreens = (answer, state) => {
  const newState = toggleLevel(state);


  const newLevel = questions[newState.level - 1];
  if (newLevel ===  questions[questions.length - 1]) {
    let counter = questions.length;

    const block =  {
        question: `<section class="section">
          <h3 class="section__title">NewBlock${counter}</h3>
          <p class="section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>`,
        answers: ``
      };
      if (counter != 9) {
        questions.push(block);
      }
      else {
        renderScreen(getBlockView(newState, newLevel, toggleScreens));
      }

    console.log(questions);
  }

  renderScreen(getBlockView(newState, newLevel, toggleScreens));
};
