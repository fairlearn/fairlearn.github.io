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
    
      
      
    
      var element = document.getElementById("f0082a23-e6e2-4997-b7b9-fa444275ec3f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f0082a23-e6e2-4997-b7b9-fa444275ec3f' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js": "YF85VygJKMVnHE+lLv2AM93Vbstr0yo2TbIu5v8se5Rq3UQAUmcuh4aaJwNlpKwa", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js": "KKuas3gevv3PvrlkyCMzffFeaMq5we/a2QsP5AUoS3mJ0jmaCL7jirFJN3GoE/lM", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js": "MK/uFc3YT18pkvvXRl66tTHjP0/dxoSH2e/eiNMFIguKlun2+WVqaPTWmUy/zvh4"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js"];
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
                    
                  var docs_json = '{"97a6978e-e270-43e3-963c-5964950ed174":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1034","type":"UnionRenderers"},{"attributes":{"start":0},"id":"1007","type":"DataRange1d"},{"attributes":{},"id":"1009","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1022","type":"VBar"},{"attributes":{"below":[{"id":"1013"}],"center":[{"id":"1015"},{"id":"1019"}],"height":480,"left":[{"id":"1016"}],"renderers":[{"id":"1024"}],"title":{"id":"1003"},"toolbar":{"id":"1020"},"toolbar_location":null,"width":640,"x_range":{"id":"1005"},"x_scale":{"id":"1009"},"y_range":{"id":"1007"},"y_scale":{"id":"1011"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1030","type":"AllLabels"},{"attributes":{},"id":"1014","type":"CategoricalTicker"},{"attributes":{"factors":["Female","Male"]},"id":"1005","type":"FactorRange"},{"attributes":{"active_multi":null},"id":"1020","type":"Toolbar"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{"data":{"top":[0.10925148221343874,0.3037672281776417],"x":["Female","Male"]},"selected":{"id":"1033"},"selection_policy":{"id":"1034"}},"id":"1021","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1021"}},"id":"1025","type":"CDSView"},{"attributes":{"text":"Fraction earning over $50,0000"},"id":"1003","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1023","type":"VBar"},{"attributes":{"formatter":{"id":"1031"},"major_label_policy":{"id":"1030"},"minor_tick_line_color":null,"ticker":{"id":"1014"}},"id":"1013","type":"CategoricalAxis"},{"attributes":{},"id":"1031","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"1028"},"major_label_policy":{"id":"1027"},"minor_tick_line_color":null,"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{},"id":"1011","type":"LinearScale"},{"attributes":{},"id":"1028","type":"BasicTickFormatter"},{"attributes":{},"id":"1033","type":"Selection"},{"attributes":{"axis":{"id":"1016"},"dimension":1,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{"data_source":{"id":"1021"},"glyph":{"id":"1022"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1023"},"view":{"id":"1025"}},"id":"1024","type":"GlyphRenderer"},{"attributes":{},"id":"1027","type":"AllLabels"},{"attributes":{"axis":{"id":"1013"},"grid_line_color":null,"ticker":null},"id":"1015","type":"Grid"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"97a6978e-e270-43e3-963c-5964950ed174","root_ids":["1002"],"roots":{"1002":"f0082a23-e6e2-4997-b7b9-fa444275ec3f"}}];
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