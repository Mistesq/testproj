import {renderScreen} from './utils';
import BlockView from "./view/block-view";
import RulesView from "./view/rules-view";
import {renderFirstGameScreen} from "./data/data";

const showBlockScreen = () => {
  renderScreen(renderFirstGameScreen);
};

renderFirstGameScreen();
