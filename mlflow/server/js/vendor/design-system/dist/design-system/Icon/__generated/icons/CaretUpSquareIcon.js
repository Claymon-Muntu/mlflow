import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { forwardRef } from 'react';
import { Icon } from '../../Icon';
function SvgCaretUpSquareIcon(props) {
    return (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 16 16", ...props, children: [_jsx("path", { fill: "currentColor", d: "M8 5.75a.75.75 0 0 1 .59.286l2.164 2.75A.75.75 0 0 1 10.165 10h-4.33a.75.75 0 0 1-.59-1.214l2.166-2.75A.75.75 0 0 1 8 5.75" }), _jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M1.75 1a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 0-.75-.75zm.75 12.5v-11h11v11z", clipRule: "evenodd" })] }));
}
const CaretUpSquareIcon = forwardRef((props, forwardedRef) => {
    return _jsx(Icon, { ref: forwardedRef, ...props, component: SvgCaretUpSquareIcon });
});
CaretUpSquareIcon.displayName = 'CaretUpSquareIcon';
export default CaretUpSquareIcon;
//# sourceMappingURL=CaretUpSquareIcon.js.map