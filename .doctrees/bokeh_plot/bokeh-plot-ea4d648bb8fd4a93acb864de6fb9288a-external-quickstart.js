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
    
      
      
    
      var element = document.getElementById("26f0c3d9-6a25-48ab-862b-2e24c0c49873");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '26f0c3d9-6a25-48ab-862b-2e24c0c49873' but no matching script tag was found.")
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
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js"];
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
                    
                  var docs_json = '{"7d10ca52-165d-4473-aef7-4206048d33c7":{"roots":{"references":[{"attributes":{"text":"Fraction earning over $50,0000"},"id":"1002","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1021","type":"VBar"},{"attributes":{},"id":"1008","type":"CategoricalScale"},{"attributes":{"axis":{"id":"1015"},"dimension":1,"ticker":null},"id":"1018","type":"Grid"},{"attributes":{"data":{"top":[0.10925148221343874,0.3037672281776417],"x":["Female","Male"]},"selected":{"id":"1030"},"selection_policy":{"id":"1031"}},"id":"1020","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1020"},"glyph":{"id":"1021"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1022"},"selection_glyph":null,"view":{"id":"1024"}},"id":"1023","type":"GlyphRenderer"},{"attributes":{"start":0},"id":"1006","type":"DataRange1d"},{"attributes":{},"id":"1016","type":"BasicTicker"},{"attributes":{"factors":["Female","Male"]},"id":"1004","type":"FactorRange"},{"attributes":{"formatter":{"id":"1029"},"minor_tick_line_color":null,"ticker":{"id":"1016"}},"id":"1015","type":"LinearAxis"},{"attributes":{},"id":"1029","type":"BasicTickFormatter"},{"attributes":{},"id":"1027","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1019","type":"Toolbar"},{"attributes":{},"id":"1013","type":"CategoricalTicker"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1022","type":"VBar"},{"attributes":{},"id":"1031","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"1027"},"minor_tick_line_color":null,"ticker":{"id":"1013"}},"id":"1012","type":"CategoricalAxis"},{"attributes":{"axis":{"id":"1012"},"grid_line_color":null,"ticker":null},"id":"1014","type":"Grid"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1014"},{"id":"1018"}],"left":[{"id":"1015"}],"plot_height":480,"plot_width":640,"renderers":[{"id":"1023"}],"title":{"id":"1002"},"toolbar":{"id":"1019"},"toolbar_location":null,"x_range":{"id":"1004"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"1020"}},"id":"1024","type":"CDSView"},{"attributes":{},"id":"1030","type":"Selection"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"7d10ca52-165d-4473-aef7-4206048d33c7","root_ids":["1001"],"roots":{"1001":"26f0c3d9-6a25-48ab-862b-2e24c0c49873"}}];
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