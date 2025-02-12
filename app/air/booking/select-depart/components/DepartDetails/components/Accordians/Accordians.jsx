import FareBenefits from './components/FareBenefits';
import ImportantFare from './components/ImportandFare';

export default function Accordians() {
  return (
    <div className="flex flex-col gap-10">
      <FareBenefits />
      <ImportantFare />
    </div>
  );
}
