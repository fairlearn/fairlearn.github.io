(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("ab81b337-d7a9-4973-93fe-2cf58bf9ce9d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ab81b337-d7a9-4973-93fe-2cf58bf9ce9d' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"f31bd1d5-ab6a-43e1-8672-2ebeadcd8292":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1029","type":"AllLabels"},{"attributes":{"formatter":{"id":"1028"},"major_label_policy":{"id":"1029"},"minor_tick_line_color":null,"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{},"id":"1028","type":"BasicTickFormatter"},{"attributes":{},"id":"1032","type":"AllLabels"},{"attributes":{"factors":["Female","Male"]},"id":"1005","type":"FactorRange"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1022","type":"VBar"},{"attributes":{"below":[{"id":"1013"}],"center":[{"id":"1015"},{"id":"1019"}],"height":480,"left":[{"id":"1016"}],"renderers":[{"id":"1024"}],"title":{"id":"1003"},"toolbar":{"id":"1020"},"toolbar_location":null,"width":640,"x_range":{"id":"1005"},"x_scale":{"id":"1009"},"y_range":{"id":"1007"},"y_scale":{"id":"1011"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1031"},"major_label_policy":{"id":"1032"},"minor_tick_line_color":null,"ticker":{"id":"1014"}},"id":"1013","type":"CategoricalAxis"},{"attributes":{"axis":{"id":"1013"},"grid_line_color":null,"ticker":null},"id":"1015","type":"Grid"},{"attributes":{"data":{"top":[0.10925148221343874,0.3037672281776417],"x":["Female","Male"]},"selected":{"id":"1034"},"selection_policy":{"id":"1033"}},"id":"1021","type":"ColumnDataSource"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1021"},"glyph":{"id":"1022"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1023"},"view":{"id":"1025"}},"id":"1024","type":"GlyphRenderer"},{"attributes":{},"id":"1034","type":"Selection"},{"attributes":{"start":0},"id":"1007","type":"DataRange1d"},{"attributes":{"active_multi":null},"id":"1020","type":"Toolbar"},{"attributes":{"text":"Fraction earning over $50,0000"},"id":"1003","type":"Title"},{"attributes":{},"id":"1033","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{},"id":"1011","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1023","type":"VBar"},{"attributes":{},"id":"1009","type":"CategoricalScale"},{"attributes":{"source":{"id":"1021"}},"id":"1025","type":"CDSView"},{"attributes":{},"id":"1031","type":"CategoricalTickFormatter"},{"attributes":{},"id":"1014","type":"CategoricalTicker"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"f31bd1d5-ab6a-43e1-8672-2ebeadcd8292","root_ids":["1002"],"roots":{"1002":"ab81b337-d7a9-4973-93fe-2cf58bf9ce9d"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();