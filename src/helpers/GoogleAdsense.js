import { Adsense } from "@ctrl/react-adsense";
import "./GoogleAdsense.css";
const GoogleAdsense = () => {
  return (
    <Adsense
      className="ExampleAdSlot"
      client="ca-pub-4087695267870956"
      slot="7259870550"
      style={{ width: 500, height: 300 }}
      format=""
    />
  );
};

export default GoogleAdsense;
