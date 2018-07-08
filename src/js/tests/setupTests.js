import Enzyme from 'enzyme';
import DotEnv from 'dotenv';
import Adapter from 'enzyme-adapter-react-16';

DotEnv.config({ path: '.env.test' });
Enzyme.configure({
	adapter: new Adapter()
});
