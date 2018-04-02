// D65 -> ICC D50
export default ({ x, y, z }) => ({
	x: x * 1.047844353856414 + y * 0.022898981050086 - z * 0.050206647741605,
	y: x * 0.029549007606644 + y * 0.990508028941971 - z * 0.017074711360960,
	z: x * -0.009250984365223 + y * 0.015072338237051 + z * 0.751717835079977
});