// Generated by CoffeeScript 1.8.0
var NHLib, NHMobile, NHMobileForm, NHModal,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

NHLib = (function() {
  NHLib.date_format = '%Y-%m-%d H:M:S';

  function NHLib() {
    this.leading_zero = __bind(this.leading_zero, this);
    this.get_timestamp = __bind(this.get_timestamp, this);
    this.date_to_string = __bind(this.date_to_string, this);
    this.date_from_string = __bind(this.date_from_string, this);
    this.version = '0.0.1';
  }

  NHLib.prototype.date_from_string = function(date_string) {
    return new Date(date_string);
  };

  NHLib.prototype.date_to_string = function(date) {
    return date.getFullYear() + "-" + this.leading_zero(date.getMonth() + 1) + "-" + this.leading_zero(date.getDate()) + " " + this.leading_zero(date.getHours()) + ":" + this.leading_zero(date.getMinutes()) + ":" + this.leading_zero(date.getSeconds());
  };

  NHLib.prototype.get_timestamp = function() {
    return Math.round(new Date().getTime() / 1000);
  };

  NHLib.prototype.leading_zero = function(date_element) {
    return ("0" + date_element).slice(-2);
  };

  return NHLib;

})();

if (typeof module !== "undefined" && module !== null) {
  module.exports.NHLib = NHLib;
}

if (typeof window !== "undefined" && window !== null) {
  window.NH = {};
}

if (typeof window !== "undefined" && window !== null) {
  window.NH.NHLib = NHLib;
}

NHMobile = (function(_super) {
  __extends(NHMobile, _super);

  function NHMobile() {
    this.test = 'yo';
  }

  return NHMobile;

})(NHLib);

if (typeof module !== "undefined" && module !== null) {
  module.exports.NHMobile = NHMobile;
}

if (typeof window !== "undefined" && window !== null) {
  window.NH = {};
}

if (typeof window !== "undefined" && window !== null) {
  window.NH.NHMobile = NHMobile;
}

NHMobileForm = (function(_super) {
  __extends(NHMobileForm, _super);

  function NHMobileForm() {
    var input, _fn, _i, _len, _ref, _ref1;
    this.form = (_ref = document.getElementsByTagName('form')) != null ? _ref[0] : void 0;
    _ref1 = this.form.elements;
    _fn = function() {
      switch (input.localName) {
        case 'input':
          switch (input.type) {
            case 'number':
              return input.addEventListener('change', function(event) {
                event.preventDefault();
                return console.log('validate');
              });
            case 'submit':
              return input.addEventListener('click', function(event) {
                event.preventDefault();
                return console.log('submit');
              });
          }
          break;
        case 'select':
          return input.addEventListener('change', function(event) {
            event.preventDefault();
            return console.log('trigger');
          });
      }
    };
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      input = _ref1[_i];
      _fn();
    }
  }

  NHMobileForm.prototype.validate = function(event) {
    event.preventDefault();
    return console.log('validate');
  };

  NHMobileForm.prototype.trigger_actions = function(event) {
    event.preventDefault();
    return console.log('trigger');
  };

  NHMobileForm.prototype.submit = function(event) {
    event.preventDefault();
    return console.log('submit');
  };

  return NHMobileForm;

})(NHMobile);

if (typeof module !== "undefined" && module !== null) {
  module.exports.NHMobileForm = NHMobileForm;
}

if (typeof window !== "undefined" && window !== null) {
  window.NH = {};
}

if (typeof window !== "undefined" && window !== null) {
  window.NH.NHMobileForm = NHMobileForm;
}

NHModal = (function() {
  function NHModal(id, title, content, options, popupTime, el) {
    var dialog, self;
    this.id = id;
    this.title = title;
    this.content = content;
    this.options = options;
    this.popupTime = popupTime;
    this.el = el;
    this.handle_button_events = __bind(this.handle_button_events, this);
    this.calculate_dimensions = __bind(this.calculate_dimensions, this);
    this.create_dialog = __bind(this.create_dialog, this);
    self = this;
    dialog = this.create_dialog(self, this.id, this.title, this.content, this.options);
    this.el.appendChild(dialog);
    this.calculate_dimensions(dialog, dialog.getElementsByClassName('dialogContent')[0], this.el);
  }

  NHModal.prototype.create_dialog = function(self, popup_id, popup_title, popup_content, popup_options) {
    var container, content, dialog_content, dialog_div, dialog_header, dialog_options, header, options;
    dialog_div = function(id) {
      var div;
      div = document.createElement('div');
      div.setAttribute('class', 'dialog');
      div.setAttribute('id', id);
      return div;
    };
    dialog_header = function(title) {
      var header;
      header = document.createElement('h2');
      header.textContent = title;
      return header;
    };
    dialog_content = function(message) {
      var content;
      content = document.createElement('div');
      content.setAttribute('class', 'dialogContent');
      content.innerHTML = message;
      return content;
    };
    dialog_options = function(self, buttons) {
      var button, option_list, _fn, _i, _len;
      option_list = document.createElement('ul');
      switch (buttons.length) {
        case 1:
          option_list.setAttribute('class', 'options one-col');
          break;
        case 2:
          option_list.setAttribute('class', 'options two-col');
          break;
        case 3:
          option_list.setAttribute('class', 'options three-col');
          break;
        case 4:
          option_list.setAttribute('class', 'options four-col');
          break;
        default:
          option_list.setAttribute('class', 'options one-col');
      }
      _fn = function(self) {
        var option_button, _ref;
        option_button = document.createElement('li');
        option_button.innerHTML = button;
        if ((_ref = option_button.getElementsByTagName('a')) != null) {
          _ref[0].addEventListener('click', self.handle_button_events);
        }
        return option_list.appendChild(option_button);
      };
      for (_i = 0, _len = buttons.length; _i < _len; _i++) {
        button = buttons[_i];
        _fn(self);
      }
      return option_list;
    };
    container = dialog_div(popup_id);
    header = dialog_header(popup_title);
    content = dialog_content(popup_content);
    options = dialog_options(self, popup_options);
    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(options);
    return container;
  };

  NHModal.prototype.calculate_dimensions = function(dialog, dialog_content, el) {
    var available_space, margins, max_height;
    margins = 40;
    available_space = function(dialog, el) {
      var dialog_header_height, dialog_options_height, el_height, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      dialog_header_height = (_ref = dialog.getElementsByTagName('h2')) != null ? (_ref1 = _ref[0]) != null ? _ref1.clientHeight : void 0 : void 0;
      dialog_options_height = (_ref2 = dialog.getElementsByClassName('options')) != null ? (_ref3 = _ref2[0]) != null ? (_ref4 = _ref3.getElementsByTagName('li')) != null ? (_ref5 = _ref4[0]) != null ? _ref5.clientHeight : void 0 : void 0 : void 0 : void 0;
      el_height = el.clientHeight;
      return el_height - ((dialog_header_height + dialog_options_height) + (margins * 2));
    };
    max_height = available_space(dialog, el);
    dialog.style.top = margins + 'px';
    if (max_height) {
      dialog_content.style.maxHeight = max_height + 'px';
    }
  };

  NHModal.prototype.handle_button_events = function(event) {
    var dialog_id;
    event.preventDefault();
    switch (event.srcElement.getAttribute('data-action')) {
      case 'close':
        dialog_id = document.getElementById(event.srcElement.getAttribute('data-target'));
        return dialog_id.parentNode.removeChild(dialog_id);
      case 'confirm':
        return console.log('yay');
    }
  };

  return NHModal;

})();

if (typeof module !== "undefined" && module !== null) {
  module.exports.NHModal = NHModal;
}

if (typeof window !== "undefined" && window !== null) {
  window.NH = {};
}

if (typeof window !== "undefined" && window !== null) {
  window.NH.NHModal = NHModal;
}
