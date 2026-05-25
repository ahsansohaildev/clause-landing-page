import logo1 from "@/assets/icons/1lg.png"
import logo2 from "@/assets/icons/2lg.png"
import logo3 from "@/assets/icons/3lg.png"
import logo4 from "@/assets/icons/4lg.png"
import logo5 from "@/assets/icons/5lg.png"
import logo6 from "@/assets/icons/6lg.png"
import logo7 from "@/assets/icons/7lg.png"
import logo8 from "@/assets/icons/8lg.png"
import logo9 from "@/assets/icons/9lg.png"
import logo10 from "@/assets/icons/10lg.png"
import logo11 from "@/assets/icons/11lg.png"
import logo12 from "@/assets/icons/12lg.png"
import logo13 from "@/assets/icons/13lg.png"
import logo14 from "@/assets/icons/14lg.png"

export const integrationLogos = [
  {
    name: "Slack",
    logo: logo1,
  },
  {
    name: "Notion",
    logo: logo2,
  },
  {
    name: "Trello",
    logo: logo3,
  },
  {
    name: "PayPal",
    logo: logo4,
  },
  {
    name: "Airtable",
    logo: logo5,
  },
  {
    name: "Google Ads",
    logo: logo6,
  },
  {
    name: "Grammarly",
    logo: logo7,
  },
  {
    name: "Monday",
    logo: logo8,
  },
  {
    name: "Asana",
    logo: logo9,
  },
  {
    name: "Mailchimp",
    logo: logo10,
  },
  {
    name: "Zapier",
    logo: logo11,
  },
  {
    name: "Zendesk",
    logo: logo12,
  },
  {
    name: "ClickUp",
    logo: logo13,
  },
  {
    name: "Shopify",
    logo: logo14,
  },
]
export const integrationRows = [
  integrationLogos.slice(0, 8),
  [...integrationLogos.slice(8, 14), ...integrationLogos.slice(0, 2)],
]