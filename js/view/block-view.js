import AbstractView from "./abstract-view";
import {getAnswersHandler} from "../utils";

class BlockView extends AbstractView {
  constructor(state, level, callback) {
    super();
    this.level = level;
    this.state = state;
    this.callback = callback;
    this.onArrowClick = this.onArrowClick.bind(this);
  }

  get template() {
    const {question, answers} = this.level;
    const {state} = this;

    return `
    ${question}
    <a class="preview__button button" href="#">Следующий</a>`;
  }

  bind() {
    this.continueArrow = this._element.querySelector(`.preview__button`);
    this.continueArrow.addEventListener(`click`, this.onArrowClick);
  }

  unbind() {
    this.continueArrow.removeEventListener(`click`, this.onArrowClick);
  }

  onArrowClick(answer) {
    this.unbind();
    this.callback(answer, this.state);
  }
}

export default BlockView;
