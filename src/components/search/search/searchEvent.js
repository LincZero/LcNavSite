import search from "@/components/search/search/search.js";

export default function searchEvent(_this, event) {
  _this.$store.commit("fm_cg_input", _this.state);
  if (event) {
    var evt = window.event || e;
    switch (evt.keyCode) {
      case 13: // Enter，搜索
        search(_this.state, _this);
        break;
      case 9: // Tab，锁存
        console.log("tab")
        if (_this.$store.state.inputLock) {
          _this.state = _this.$store.state.inputLock
          _this.$store.commit("fm_cg_inputLock", null);
        } else if (_this.state) {
          _this.$store.commit("fm_cg_inputLock", _this.state)
          _this.state = ""
        }
        break;
      case 27: // Ese，清空
        _this.state = ""
        break;
      default:
        break
    }
  }
}