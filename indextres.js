var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var palabras = {}(__makeTemplateObject(["uno"], ["uno"]));
"dos"(__makeTemplateObject(["tres"], ["tres"]));
for (var i = 0; i < palabras.length; i++) {
    console.log(palabras[i]);
}
