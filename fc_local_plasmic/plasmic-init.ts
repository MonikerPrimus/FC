import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld } from './components/HelloWorld';
import { AuthButton } from "./components/AuthButton";
import { AuthForm } from "./components/AuthForm";


export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "",
      token: "",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,

});

PLASMIC.registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {
    verbose: 'boolean',
    children: 'slot'
  }
});

PLASMIC.registerComponent(AuthButton, {
  name: "AuthButton",
  props: {
    className: {
      type: "string",
      displayName: "CSS Class",
      description: "CSS class for styling the button container",
    },
    label: {
      type: "string",
      displayName: "Button Label",
      description: "Label text for the button",
      defaultValue: "Log Out",
    },
    verbose: {
      type: "boolean",
      displayName: "Verbose",
      description: "Show additional logout message",
    },
  },
  displayName: "Auth Button",
  description: "Button component to handle user logout",
});



// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
