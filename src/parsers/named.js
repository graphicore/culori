import parseNumber from './number';
import named_colors from '../api/colors/named';

// Also supports the `transparent` color as defined in:
// https://drafts.csswg.org/css-color/#transparent-black
export default color => {
	return (typeof color === 'string' && parseNumber(named_colors[color.toLowerCase()], 6)) || undefined;
}