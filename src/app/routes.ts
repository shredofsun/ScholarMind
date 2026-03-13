import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { FeaturesPage } from "./pages/features-page";
import { PricingPage } from "./pages/pricing-page";
import { HowItWorksPage } from "./pages/how-it-works-page";
import { AboutPage } from "./pages/about-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/features",
    Component: FeaturesPage,
  },
  {
    path: "/pricing",
    Component: PricingPage,
  },
  {
    path: "/how-it-works",
    Component: HowItWorksPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
]);
