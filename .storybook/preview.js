import { setCompodocJson } from "@storybook/addon-docs/angular";
import "!style-loader!css-loader!sass-loader!../src/stories/assets/styles/styles-stories.scss";
import docJson from "../documentation.json";
import { addParameters } from '@storybook/angular';

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addParameters({
  docs: {
    inlineStories: true,
  },
});
