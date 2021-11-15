(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("f87444ee-e119-4023-b9ca-c98d113009ad");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f87444ee-e119-4023-b9ca-c98d113009ad' but no matching script tag was found.")
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
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.1.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"eec54f2a-b15d-4ab2-9811-766533ab6600":{"defs":[],"roots":{"references":[{"attributes":{"start":0},"id":"1007","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1022","type":"VBar"},{"attributes":{},"id":"1011","type":"LinearScale"},{"attributes":{"below":[{"id":"1013"}],"center":[{"id":"1015"},{"id":"1019"}],"height":480,"left":[{"id":"1016"}],"renderers":[{"id":"1025"}],"title":{"id":"1003"},"toolbar":{"id":"1020"},"toolbar_location":null,"width":640,"x_range":{"id":"1005"},"x_scale":{"id":"1009"},"y_range":{"id":"1007"},"y_scale":{"id":"1011"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"1016"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{"factors":["Female","Male"]},"id":"1005","type":"FactorRange"},{"attributes":{},"id":"1014","type":"CategoricalTicker"},{"attributes":{},"id":"1032","type":"CategoricalTickFormatter"},{"attributes":{},"id":"1009","type":"CategoricalScale"},{"attributes":{},"id":"1020","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1024","type":"VBar"},{"attributes":{"source":{"id":"1021"}},"id":"1026","type":"CDSView"},{"attributes":{},"id":"1034","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1013"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"1015","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1023","type":"VBar"},{"attributes":{},"id":"1035","type":"Selection"},{"attributes":{"coordinates":null,"formatter":{"id":"1032"},"group":null,"major_label_policy":{"id":"1033"},"minor_tick_line_color":null,"ticker":{"id":"1014"}},"id":"1013","type":"CategoricalAxis"},{"attributes":{"coordinates":null,"group":null,"text":"Fraction earning over $50,0000"},"id":"1003","type":"Title"},{"attributes":{"coordinates":null,"formatter":{"id":"1029"},"group":null,"major_label_policy":{"id":"1030"},"minor_tick_line_color":null,"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{},"id":"1029","type":"BasicTickFormatter"},{"attributes":{},"id":"1033","type":"AllLabels"},{"attributes":{"data":{"top":[0.10925148221343874,0.3037672281776417],"x":["Female","Male"]},"selected":{"id":"1035"},"selection_policy":{"id":"1034"}},"id":"1021","type":"ColumnDataSource"},{"attributes":{},"id":"1030","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"1021"},"glyph":{"id":"1022"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1024"},"nonselection_glyph":{"id":"1023"},"view":{"id":"1026"}},"id":"1025","type":"GlyphRenderer"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"eec54f2a-b15d-4ab2-9811-766533ab6600","root_ids":["1002"],"roots":{"1002":"f87444ee-e119-4023-b9ca-c98d113009ad"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
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
        
        for (let i = 0; i < inline_js.length; i++) {
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