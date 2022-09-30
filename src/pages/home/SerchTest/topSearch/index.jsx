import React, { Component } from "react";

export default class TopSearch extends Component {
  componentDidMount() {
    util.eventBus.addListener("topSearchSelect", () => this.inputDom.select());
    util.eventBus.addListener("seachBlur", () => this.inputDom.blur());
  }

  componentWillUnmount() {
    util.eventBus.removeListener("topSearchSelect");
    util.eventBus.removeListener("seachBlur");
  }

  handleChange = (event) => {
    let eventValue = event.target.value;
    if (eventValue) {
      this.props.dispatch(showTopSearchClear({ isShow: true }));
    } else {
      this.props.dispatch(hideTopSearchClear());
    }
    this.props.dispatch(setTopSearchValue(eventValue));

    if (this.props.topSearchComposition) return;
    this.emitSearchChange(eventValue);
  };

  emitSearchChange = (eventValue) => {
    util.eventBus.emit("topSearchChange", eventValue);
  };

  inputOnFocus = () => {
    this.props.dispatch(showTopSearchModal("topSearch"));
    this.props.dispatch(hideSlideModal());
    util.yach.refreshToken();
  };

  inputOnClick = () => {
    // 点击消息列表页上方的搜索框时埋点
    util.sensorsData.track("Click_Chat_Element", {
      pageName: "103",
      $element_name: "225",
    });
  };

  handleStopPropagation = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    util.sensorsData.track("Click_Search");
  };

  handleClearVlaue = (e) => {
    this.props.dispatch(hideTopSearchClear());
    this.props.dispatch(delTopSearchValue());
    this.emitSearchChange("");
    this.inputDom.select();
  };

  getInputDom = (dom) => {
    this.inputDom = dom;
  };

  keyDownhandle = (e) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        util.eventBus.emit("topSearchArrow", "up");
        break;
      case "ArrowDown":
        e.preventDefault();
        util.eventBus.emit("topSearchArrow", "down");
        break;
      case "Tab":
        e.preventDefault();
        this.props.dispatch({ type: "set-top-search-Tab", value: "tab" });
        this.emitSearchChange(this.props.topSearchValue);
        break;
      case "Enter":
        util.eventBus.emit("topSearchEnter");
        break;
      case "Escape":
        if (this.props.topSearchValue) return this.handleClearVlaue();
        this.inputDom.blur();
        this.props.dispatch(hideTopSearchModal());
        break;
      default:
        break;
    }
  };

  inputComposition = (e) => {
    if (e.type === "compositionstart")
      return this.props.dispatch(setTopSearchComposition(true));
    if (e.type === "compositionupdate") this.inputValue = e.target.value;
    if (e.type === "compositionend") {
      this.emitSearchChange(e.target.value);
      this.props.dispatch(setTopSearchComposition(false));
    }
  };
  render() {
    return (
      <div className={css.box} onMouseDown={onStopPropagation}>
        <div className={css.input}>
          <span
            className={`${css.input_icon} ${css.sousuo_icon} iconfont-yach yach-goutong-sousuoliaotianjilu`}
          />
          {clearIcon.isShow ? (
            <span
              className={`${css.input_icon} ${css.shanchu_icon}`}
              onClick={handleClearVlaue}
            />
          ) : null}

          <input
            id="sestem-topsearch-ipt"
            placeholder={util.locale("im_search")}
            value={queryData}
            onChange={handleChange}
            onCompositionStart={inputComposition}
            onCompositionUpdate={inputComposition}
            onCompositionEnd={inputComposition}
            onFocus={inputOnFocus}
            onKeyDown={keyDownhandle}
            onClick={inputOnClick}
            ref={(el) => {
              getInputDom(el);
            }}
          />
        </div>
      </div>
    );
  }
}
