import Cards from './Cards.jsx';
import { responses } from '../../../lib/data';

export default function SummaryCards() {
    const names = responses.map(r => r.name);
    const year_of_study = responses.map(r => r.year_of_study);
    const phone_number = responses.map(r => r.phone_number);
    const email = responses.map(r => r.email);
    const branch = responses.map(r => r.branch);
    const prior_exp = responses.map(r => r.prior_exp);

    return (
        <>
            <Cards title="Enter your Name" items={names} />
            <Cards title="Choose Year of Study" items={year_of_study} />
            <Cards title="Enter your Phone Number" items={phone_number} />
            <Cards title="Enter your Email Address" items={email} />
            <Cards title="Select your Branch" items={branch} />
            <Cards
                title="Do you have any prior experience working in Operations?"
                items={prior_exp}
            />
        </>
    );
}
