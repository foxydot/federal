jQuery(document).ready(function(A){var e,r,k,n,q,L,z,x={"aria-required":"true"},b={"aria-required":"false"},B={disabled:"disabled"},i={"aria-required":"false",disabled:"disabled"};z=new Image(),z.src='<?php echo $vars["i"]; ?>/ajax-loader.gif';if(A("form.s2member-pro-paypal-registration-form").length>1||A("form.s2member-pro-paypal-checkout-form").length>1||A("form.s2member-pro-paypal-sp-checkout-form").length>1){return alert("Detected more than one s2Member® Pro Form.\n\nPlease use only ONE s2Member® Pro Form Shortcode on each Post/Page. Attempting to serve more than one Pro Form on each Post/Page (even w/ DHTML) may result in unexpected/broken functionality.")}if((e=A("form#s2member-pro-paypal-cancellation-form")).length===1){var O="div#s2member-pro-paypal-cancellation-form-captcha-section",o="div#s2member-pro-paypal-cancellation-form-submission-section",w=A(o+" input#s2member-pro-paypal-cancellation-submit");ws_plugin__s2member_animateProcessing(w,"reset"),w.removeAttr("disabled");e.submit(function(){var U=this,S="",R="",V="";var T=A(O+" input#recaptcha_response_field");A(":input",U).each(function(){var W=A.trim(A(this).attr("id")).replace(/---[0-9]+$/g,"");if(W&&(S=A.trim(A('label[for="'+W+'"]',U).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(R=ws_plugin__s2member_validationErrors(S,this,U)){V+=R+"\n\n"}}});if(V=A.trim(V)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+V);return false}else{if(T.length&&!T.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}w.attr(B),ws_plugin__s2member_animateProcessing(w);return true})}else{if((r=A("form#s2member-pro-paypal-update-form")).length===1){var u,v="div#s2member-pro-paypal-update-form-billing-method-section",I="div#s2member-pro-paypal-update-form-billing-address-section",m=v+' input[name="s2member_pro_paypal_update[card_type]"]',O="div#s2member-pro-paypal-update-form-captcha-section",o="div#s2member-pro-paypal-update-form-submission-section",w=A(o+" input#s2member-pro-paypal-update-submit");ws_plugin__s2member_animateProcessing(w,"reset"),w.removeAttr("disabled");(u=function(R){var S=A(m+":checked").val();if(A.inArray(S,["Visa","MasterCard","Amex","Discover"])!==-1){A(v+" > div.s2member-pro-paypal-update-form-div").show();A(v+" > div.s2member-pro-paypal-update-form-div :input").attr(x);A(v+" > div#s2member-pro-paypal-update-form-card-start-date-issue-number-div").hide();A(v+" > div#s2member-pro-paypal-update-form-card-start-date-issue-number-div :input").attr(b);A(I+" > div.s2member-pro-paypal-update-form-div").show();A(I+" > div.s2member-pro-paypal-update-form-div :input").attr(x);A(I).show(),(R)?A(v+" input#s2member-pro-paypal-update-card-number").focus():null}else{if(A.inArray(S,["Maestro","Solo"])!==-1){A(v+" > div.s2member-pro-paypal-update-form-div").show();A(v+" > div.s2member-pro-paypal-update-form-div :input").attr(x);A(I+" > div.s2member-pro-paypal-update-form-div").show();A(I+" > div.s2member-pro-paypal-update-form-div :input").attr(x);A(I).show(),(R)?A(v+" input#s2member-pro-paypal-update-card-number").focus():null}else{if(!S){A(v+" > div.s2member-pro-paypal-update-form-div").hide();A(v+" > div.s2member-pro-paypal-update-form-div :input").attr(b);A(v+" > div#s2member-pro-paypal-update-form-card-type-div").show();A(v+" > div#s2member-pro-paypal-update-form-card-type-div :input").attr(x);A(I+" > div.s2member-pro-paypal-update-form-div").hide();A(I+" > div.s2member-pro-paypal-update-form-div :input").attr(b);A(I).hide(),(R)?A(o+" input#s2member-pro-paypal-update-submit").focus():null}}}})();A(m).click(u).change(u);r.submit(function(){var U=this,S="",R="",V="";var T=A(O+" input#recaptcha_response_field");if(!A(m+":checked").val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Please choose a Billing Method.", "s2member-front", "s2member")); ?>');return false}A(":input",U).each(function(){var W=A.trim(A(this).attr("id")).replace(/---[0-9]+$/g,"");if(W&&(S=A.trim(A('label[for="'+W.replace(/-(month|year)/,"")+'"]',U).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(R=ws_plugin__s2member_validationErrors(S,this,U)){V+=R+"\n\n"}}});if(V=A.trim(V)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+V);return false}else{if(T.length&&!T.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}w.attr(B),ws_plugin__s2member_animateProcessing(w);return true})}else{if((k=A("form#s2member-pro-paypal-registration-form")).length===1){var M,s,N="div#s2member-pro-paypal-registration-form-registration-section",O="div#s2member-pro-paypal-registration-form-captcha-section",o="div#s2member-pro-paypal-registration-form-submission-section",w=A(o+" input#s2member-pro-paypal-registration-submit");ws_plugin__s2member_animateProcessing(w,"reset"),w.removeAttr("disabled");(M=function(R){if(A(o+" input#s2member-pro-paypal-registration-names-not-required-or-not-possible").length){A(N+" > div#s2member-pro-paypal-registration-form-first-name-div").hide();A(N+" > div#s2member-pro-paypal-registration-form-first-name-div :input").attr(i);A(N+" > div#s2member-pro-paypal-registration-form-last-name-div").hide();A(N+" > div#s2member-pro-paypal-registration-form-last-name-div :input").attr(i)}})();(s=function(R){if(A(o+" input#s2member-pro-paypal-registration-password-not-required-or-not-possible").length){A(N+" > div#s2member-pro-paypal-registration-form-password-div").hide();A(N+" > div#s2member-pro-paypal-registration-form-password-div :input").attr(i)}})();A(N+" > div#s2member-pro-paypal-registration-form-password-div :input").keyup(function(){ws_plugin__s2member_passwordStrength(A(N+" input#s2member-pro-paypal-registration-username"),A(N+" input#s2member-pro-paypal-registration-password1"),A(N+" input#s2member-pro-paypal-registration-password2"),A(N+" div#s2member-pro-paypal-registration-form-password-strength"))});k.submit(function(){var U=this,S="",R="",X="";var T=A(O+" input#recaptcha_response_field");var W=A(N+' input#s2member-pro-paypal-registration-password1[aria-required="true"]');var V=A(N+" input#s2member-pro-paypal-registration-password2");A(":input",U).each(function(){var Y=A.trim(A(this).attr("id")).replace(/---[0-9]+$/g,"");if(Y&&(S=A.trim(A('label[for="'+Y+'"]',U).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(R=ws_plugin__s2member_validationErrors(S,this,U)){X+=R+"\n\n"}}});if(X=A.trim(X)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+X);return false}else{if(W.length&&A.trim(W.val())!==A.trim(V.val())){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Passwords do not match up. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(W.length&&A.trim(W.val()).length<6){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Password MUST be at least 6 characters. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(T.length&&!T.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}}}w.attr(B),ws_plugin__s2member_animateProcessing(w);return true})}else{if((n=A("form#s2member-pro-paypal-sp-checkout-form")).length===1){var j,F,K,t=true,J,p,f,D,c,E,u,a="div#s2member-pro-paypal-sp-checkout-form-options-section",G="div#s2member-pro-paypal-sp-checkout-form-description-section",H="div#s2member-pro-paypal-sp-checkout-form-coupon-section",P=H+" input#s2member-pro-paypal-sp-checkout-coupon-apply",N="div#s2member-pro-paypal-sp-checkout-form-registration-section",v="div#s2member-pro-paypal-sp-checkout-form-billing-method-section",m=v+' input[name="s2member_pro_paypal_sp_checkout[card_type]"]',I="div#s2member-pro-paypal-sp-checkout-form-billing-address-section",y=A(I+" > div#s2member-pro-paypal-sp-checkout-form-ajax-tax-div"),O="div#s2member-pro-paypal-sp-checkout-form-captcha-section",o="div#s2member-pro-paypal-sp-checkout-form-submission-section",l=o+" input#s2member-pro-paypal-sp-checkout-nonce",d=o+" input#s2member-pro-paypal-sp-checkout-submit";var C=A.trim(A("input#s2member-pro-paypal-lang-attr").val());var g='<input type="submit" id="s2member-pro-paypal-sp-checkout-submit" class="s2member-pro-paypal-submit s2member-pro-paypal-sp-checkout-submit" value="<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (esc_attr (_x ("Submit Form", "s2member-front", "s2member"))); ?>" tabindex="500" />';var h='<input type="image" src="https://www.paypal.com/'+((C)?C:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (esc_attr (_x ("en_US", "s2member-front paypal-button-lang-code", "s2member"))); ?>')+'/i/btn/btn_xpressCheckout.gif" id="s2member-pro-paypal-sp-checkout-submit" class="s2member-pro-paypal-submit s2member-pro-paypal-sp-checkout-submit" value="<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (esc_attr (_x ("Submit Form", "s2member-front", "s2member"))); ?>" tabindex="500" />';ws_plugin__s2member_animateProcessing(A(d),"reset"),A(d).removeAttr("disabled"),A(P).removeAttr("disabled");(j=function(R){if(!A(a+" select#s2member-pro-paypal-sp-checkout-options option").length){A(a).hide();A(G).show()}else{A(a).show();A(G).hide();A(a+" select#s2member-pro-paypal-sp-checkout-options").change(function(){A(l).val("option"),q.submit()})}})();(F=function(R){if(A(o+" input#s2member-pro-paypal-sp-checkout-coupons-not-required-or-not-possible").length){A(H).hide()}else{A(H).show()}})();(K=function(R){if(A(o+" input#s2member-pro-paypal-sp-checkout-tax-not-required-or-not-possible").length){y.hide(),t=false}})();(J=function(S){if(t&&!(S&&S.interval&&document.activeElement.id==="s2member-pro-paypal-sp-checkout-country")){var R=A(o+" input#s2member-pro-paypal-sp-checkout-attr").val();var V=A.trim(A(I+" input#s2member-pro-paypal-sp-checkout-state").val());var W=A(I+" select#s2member-pro-paypal-sp-checkout-country").val();var U=A.trim(A(I+" input#s2member-pro-paypal-sp-checkout-zip").val());var T=V+"|"+W+"|"+U;if(V&&W&&U&&T&&(!c||c!==T)&&(c=T)){(D)?D.abort():null,clearTimeout(f),f=null;y.html('<div><img src="<?php echo $vars["i"]; ?>/ajax-loader.gif" alt="<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (esc_attr (_x ("Calculating Sales Tax...", "s2member-front", "s2member"))); ?>" /> <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("calculating sales tax...", "s2member-front", "s2member")); ?></div>');f=setTimeout(function(){D=A.post('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (admin_url ("/admin-ajax.php")); ?>',{action:"ws_plugin__s2member_pro_paypal_ajax_tax",ws_plugin__s2member_pro_paypal_ajax_tax:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (c_ws_plugin__s2member_utils_encryption::encrypt ("ws-plugin--s2member-pro-paypal-ajax-tax")); ?>',"ws_plugin__s2member_pro_paypal_ajax_tax_vars[attr]":R,"ws_plugin__s2member_pro_paypal_ajax_tax_vars[state]":V,"ws_plugin__s2member_pro_paypal_ajax_tax_vars[country]":W,"ws_plugin__s2member_pro_paypal_ajax_tax_vars[zip]":U},function(X){clearTimeout(f),f=null;try{y.html("<div>"+A.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("<strong>Sales Tax%s:</strong> %s<br /><strong>— Total%s:</strong> %s", "s2member-front", "s2member")); ?>',((X.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Today", "s2member-front", "s2member")); ?>':""),((X.tax_per)?"<em>"+X.tax_per+"</em> ( "+X.cur_symbol+""+X.tax+" )":X.cur_symbol+""+X.tax),((X.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Today", "s2member-front", "s2member")); ?>':""),X.cur_symbol+""+X.total)+"</div>")}catch(Y){}},"json")},((S&&S.keyCode)?1000:100))}else{if(!V||!W||!U||!T){y.html(""),c=null}}}})();p=function(R){setTimeout(function(){J(R)},10)};A(I+" input#s2member-pro-paypal-sp-checkout-state").bind("keyup blur",J).bind("cut paste",p);A(I+" input#s2member-pro-paypal-sp-checkout-zip").bind("keyup blur",J).bind("cut paste",p);A(I+" select#s2member-pro-paypal-sp-checkout-country").bind("change",J);setInterval(function(){J({interval:true})},1000);(E=function(R){if(S2MEMBER_CURRENT_USER_IS_LOGGED_IN){A(N+" input#s2member-pro-paypal-sp-checkout-first-name").each(function(){var S=A(this),T=S.val();(!T)?S.val(S2MEMBER_CURRENT_USER_FIRST_NAME):null});A(N+" input#s2member-pro-paypal-sp-checkout-last-name").each(function(){var S=A(this),T=S.val();(!T)?S.val(S2MEMBER_CURRENT_USER_LAST_NAME):null});A(N+" input#s2member-pro-paypal-sp-checkout-email").each(function(){var S=A(this),T=S.val();(!T)?S.val(S2MEMBER_CURRENT_USER_EMAIL):null})}})();(u=function(R){if(A(o+" input#s2member-pro-paypal-sp-checkout-payment-not-required-or-not-possible").length){A(m).val(["Free"])}var S=A(m+":checked").val();if(A.inArray(S,["Free"])!==-1){A(v).hide(),A(I).hide();A(v+" > div.s2member-pro-paypal-sp-checkout-form-div").hide();A(v+" > div.s2member-pro-paypal-sp-checkout-form-div :input").attr(b);A(I+" > div.s2member-pro-paypal-sp-checkout-form-div").hide();A(I+" > div.s2member-pro-paypal-sp-checkout-form-div :input").attr(b);(!t)?y.hide():null;A(o+" input#s2member-pro-paypal-sp-checkout-submit").replaceWith(g);(R)?A(o+" input#s2member-pro-paypal-sp-checkout-submit").focus():null}else{if(A.inArray(S,["Visa","MasterCard","Amex","Discover"])!==-1){A(v).show(),A(I).show();A(v+" > div.s2member-pro-paypal-sp-checkout-form-div").show();A(v+" > div.s2member-pro-paypal-sp-checkout-form-div :input").attr(x);A(v+" > div#s2member-pro-paypal-sp-checkout-form-card-start-date-issue-number-div").hide();A(v+" > div#s2member-pro-paypal-sp-checkout-form-card-start-date-issue-number-div :input").attr(b);A(I+" > div.s2member-pro-paypal-sp-checkout-form-div").show();A(I+" > div.s2member-pro-paypal-sp-checkout-form-div :input").attr(x);(!t)?y.hide():null;A(o+" input#s2member-pro-paypal-sp-checkout-submit").replaceWith(g);(R)?A(v+" input#s2member-pro-paypal-sp-checkout-card-number").focus():null}else{if(A.inArray(S,["Maestro","Solo"])!==-1){A(v).show(),A(I).show();A(v+" > div.s2member-pro-paypal-sp-checkout-form-div").show();A(v+" > div.s2member-pro-paypal-sp-checkout-form-div :input").attr(x);A(I+" > div.s2member-pro-paypal-sp-checkout-form-div").show();A(I+" > div.s2member-pro-paypal-sp-checkout-form-div :input").attr(x);(!t)?y.hide():null;A(o+" input#s2member-pro-paypal-sp-checkout-submit").replaceWith(g);(R)?A(v+" input#s2member-pro-paypal-sp-checkout-card-number").focus():null}else{if((!S||S==="PayPal")&&t){A(v).show(),A(I).show();A(v+" > div.s2member-pro-paypal-sp-checkout-form-div").show();A(v+" > div.s2member-pro-paypal-sp-checkout-form-div :input").attr(x);A(v+" > div#s2member-pro-paypal-sp-checkout-form-card-number-div").hide();A(v+" > div#s2member-pro-paypal-sp-checkout-form-card-number-div :input").attr(b);A(v+" > div#s2member-pro-paypal-sp-checkout-form-card-expiration-div").hide();A(v+" > div#s2member-pro-paypal-sp-checkout-form-card-expiration-div :input").attr(b);A(v+" > div#s2member-pro-paypal-sp-checkout-form-card-verification-div").hide();A(v+" > div#s2member-pro-paypal-sp-checkout-form-card-verification-div :input").attr(b);A(v+" > div#s2member-pro-paypal-sp-checkout-form-card-start-date-issue-number-div").hide();A(v+" > div#s2member-pro-paypal-sp-checkout-form-card-start-date-issue-number-div :input").attr(b);A(I+" > div.s2member-pro-paypal-sp-checkout-form-div").show();A(I+" > div.s2member-pro-paypal-sp-checkout-form-div :input").attr(x);A(I+" > div#s2member-pro-paypal-sp-checkout-form-street-div").hide();A(I+" > div#s2member-pro-paypal-sp-checkout-form-street-div :input").attr(b);A(I+" > div#s2member-pro-paypal-sp-checkout-form-city-div").hide();A(I+" > div#s2member-pro-paypal-sp-checkout-form-city-div :input").attr(b);A(o+" input#s2member-pro-paypal-sp-checkout-submit").replaceWith(h);(R)?A(I+" input#s2member-pro-paypal-sp-checkout-state").focus():null}else{if(!S||S==="PayPal"){A(v).show(),A(I).hide();A(v+" > div.s2member-pro-paypal-sp-checkout-form-div").hide();A(v+" > div.s2member-pro-paypal-sp-checkout-form-div :input").attr(b);A(v+" > div#s2member-pro-paypal-sp-checkout-form-card-type-div").show();A(v+" > div#s2member-pro-paypal-sp-checkout-form-card-type-div :input").attr(x);A(I+" > div.s2member-pro-paypal-sp-checkout-form-div").hide();A(I+" > div.s2member-pro-paypal-sp-checkout-form-div :input").attr(b);A(o+" input#s2member-pro-paypal-sp-checkout-submit").replaceWith(h);(R)?A(o+" input#s2member-pro-paypal-sp-checkout-submit").focus():null}}}}}K()})();A(m).click(u).change(u);A(P).click(function(){A(l).val("apply-coupon"),n.submit()});n.submit(function(){if(A.inArray(A(l).val(),["option","apply-coupon"])===-1){var U=this,S="",R="",V="";var T=A(O+" input#recaptcha_response_field");if(!A(m+":checked").val()){A(m).val(["PayPal"])}A(":input",U).each(function(){var W=A.trim(A(this).attr("id")).replace(/---[0-9]+$/g,"");if(W&&(S=A.trim(A('label[for="'+W.replace(/-(month|year)/,"")+'"]',U).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(R=ws_plugin__s2member_validationErrors(S,this,U)){V+=R+"\n\n"}}});if(V=A.trim(V)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+V);return false}else{if(T.length&&!T.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}}A(d).attr(B),ws_plugin__s2member_animateProcessing(A(d)),A(P).attr(B);return true})}else{if((q=A("form#s2member-pro-paypal-checkout-form")).length===1){var j,F,K,t=true,J,p,f,D,c,s,u,E,a="div#s2member-pro-paypal-checkout-form-options-section",G="div#s2member-pro-paypal-checkout-form-description-section",H="div#s2member-pro-paypal-checkout-form-coupon-section",P=H+" input#s2member-pro-paypal-checkout-coupon-apply",N="div#s2member-pro-paypal-checkout-form-registration-section",Q="div#s2member-pro-paypal-checkout-form-custom-fields-section",v="div#s2member-pro-paypal-checkout-form-billing-method-section",m=v+' input[name="s2member_pro_paypal_checkout[card_type]"]',I="div#s2member-pro-paypal-checkout-form-billing-address-section",y=A(I+" > div#s2member-pro-paypal-checkout-form-ajax-tax-div"),O="div#s2member-pro-paypal-checkout-form-captcha-section",o="div#s2member-pro-paypal-checkout-form-submission-section",l=o+" input#s2member-pro-paypal-checkout-nonce",d=o+" input#s2member-pro-paypal-checkout-submit";var C=A.trim(A("input#s2member-pro-paypal-lang-attr").val());var g='<input type="submit" id="s2member-pro-paypal-checkout-submit" class="s2member-pro-paypal-submit s2member-pro-paypal-checkout-submit" value="<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (esc_attr (_x ("Submit Form", "s2member-front", "s2member"))); ?>" tabindex="600" />';var h='<input type="image" src="https://www.paypal.com/'+((C)?C:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (esc_attr (_x ("en_US", "s2member-front paypal-button-lang-code", "s2member"))); ?>')+'/i/btn/btn_xpressCheckout.gif" id="s2member-pro-paypal-checkout-submit" class="s2member-pro-paypal-submit s2member-pro-paypal-checkout-submit" value="<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (esc_attr (_x ("Submit Form", "s2member-front", "s2member"))); ?>" tabindex="600" />';ws_plugin__s2member_animateProcessing(A(d),"reset"),A(d).removeAttr("disabled"),A(P).removeAttr("disabled");(j=function(R){if(!A(a+" select#s2member-pro-paypal-checkout-options option").length){A(a).hide();A(G).show()}else{A(a).show();A(G).hide();A(a+" select#s2member-pro-paypal-checkout-options").change(function(){A(l).val("option"),q.submit()})}})();(F=function(R){if(A(o+" input#s2member-pro-paypal-checkout-coupons-not-required-or-not-possible").length){A(H).hide()}else{A(H).show()}})();(K=function(R){if(A(o+" input#s2member-pro-paypal-checkout-tax-not-required-or-not-possible").length){y.hide(),t=false}})();(J=function(S){if(t&&!(S&&S.interval&&document.activeElement.id==="s2member-pro-paypal-checkout-country")){var R=A(o+" input#s2member-pro-paypal-checkout-attr").val();var V=A.trim(A(I+" input#s2member-pro-paypal-checkout-state").val());var W=A(I+" select#s2member-pro-paypal-checkout-country").val();var U=A.trim(A(I+" input#s2member-pro-paypal-checkout-zip").val());var T=V+"|"+W+"|"+U;if(V&&W&&U&&T&&(!c||c!==T)&&(c=T)){(D)?D.abort():null,clearTimeout(f),f=null;y.html('<div><img src="<?php echo $vars["i"]; ?>/ajax-loader.gif" alt="<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (esc_attr (_x ("Calculating Sales Tax...", "s2member-front", "s2member"))); ?>" /> <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("calculating sales tax...", "s2member-front", "s2member")); ?></div>');f=setTimeout(function(){D=A.post('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (admin_url ("/admin-ajax.php")); ?>',{action:"ws_plugin__s2member_pro_paypal_ajax_tax",ws_plugin__s2member_pro_paypal_ajax_tax:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (c_ws_plugin__s2member_utils_encryption::encrypt ("ws-plugin--s2member-pro-paypal-ajax-tax")); ?>',"ws_plugin__s2member_pro_paypal_ajax_tax_vars[attr]":R,"ws_plugin__s2member_pro_paypal_ajax_tax_vars[state]":V,"ws_plugin__s2member_pro_paypal_ajax_tax_vars[country]":W,"ws_plugin__s2member_pro_paypal_ajax_tax_vars[zip]":U},function(X,Z){clearTimeout(f),f=null;try{y.html("<div>"+A.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("<strong>Sales Tax%s:</strong> %s<br /><strong>— Total%s:</strong> %s", "s2member-front", "s2member")); ?>',((X.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Today", "s2member-front", "s2member")); ?>':""),((X.tax_per)?"<em>"+X.tax_per+"</em> ( "+X.cur_symbol+""+X.tax+" )":X.cur_symbol+""+X.tax),((X.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Today", "s2member-front", "s2member")); ?>':""),X.cur_symbol+""+X.total)+"</div>")}catch(Y){}},"json")},((S&&S.keyCode)?1000:100))}else{if(!V||!W||!U||!T){y.html(""),c=null}}}})();p=function(R){setTimeout(function(){J(R)},10)};A(I+" input#s2member-pro-paypal-checkout-state").bind("keyup blur",J).bind("cut paste",p);A(I+" input#s2member-pro-paypal-checkout-zip").bind("keyup blur",J).bind("cut paste",p);A(I+" select#s2member-pro-paypal-checkout-country").bind("change",J);setInterval(function(){J({interval:true})},1000);(s=function(R){if(A(o+" input#s2member-pro-paypal-checkout-password-not-required-or-not-possible").length){A(N+" > div#s2member-pro-paypal-checkout-form-password-div").hide();A(N+" > div#s2member-pro-paypal-checkout-form-password-div :input").attr(i)}})();(E=function(R){if(S2MEMBER_CURRENT_USER_IS_LOGGED_IN){A(N+" input#s2member-pro-paypal-checkout-first-name").each(function(){var S=A(this),T=S.val();(!T)?S.val(S2MEMBER_CURRENT_USER_FIRST_NAME):null});A(N+" input#s2member-pro-paypal-checkout-last-name").each(function(){var S=A(this),T=S.val();(!T)?S.val(S2MEMBER_CURRENT_USER_LAST_NAME):null});A(N+" input#s2member-pro-paypal-checkout-email").val(S2MEMBER_CURRENT_USER_EMAIL).attr(i);A(N+" input#s2member-pro-paypal-checkout-username").val(S2MEMBER_CURRENT_USER_LOGIN).attr(i);A(N+" > div#s2member-pro-paypal-checkout-form-password-div").hide();A(N+" > div#s2member-pro-paypal-checkout-form-password-div :input").attr(i);if(A.trim(A(N+" > div#s2member-pro-paypal-checkout-form-registration-section-title").html())==='<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Create Profile", "s2member-front", "s2member")); ?>'){A(N+" > div#s2member-pro-paypal-checkout-form-registration-section-title").html('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Your Profile", "s2member-front", "s2member")); ?>')}A(Q).hide(),A(Q+" :input").attr(i)}})();(u=function(R){if(A(o+" input#s2member-pro-paypal-checkout-payment-not-required-or-not-possible").length){A(m).val(["Free"])}var S=A(m+":checked").val();if(A.inArray(S,["Free"])!==-1){A(v).hide(),A(I).hide();A(v+" > div.s2member-pro-paypal-checkout-form-div").hide();A(v+" > div.s2member-pro-paypal-checkout-form-div :input").attr(b);A(I+" > div.s2member-pro-paypal-checkout-form-div").hide();A(I+" > div.s2member-pro-paypal-checkout-form-div :input").attr(b);(!t)?y.hide():null;A(o+" input#s2member-pro-paypal-checkout-submit").replaceWith(g);(R)?A(o+" input#s2member-pro-paypal-checkout-submit").focus():null}else{if(A.inArray(S,["Visa","MasterCard","Amex","Discover"])!==-1){A(v).show(),A(I).show();A(v+" > div.s2member-pro-paypal-checkout-form-div").show();A(v+" > div.s2member-pro-paypal-checkout-form-div :input").attr(x);A(v+" > div#s2member-pro-paypal-checkout-form-card-start-date-issue-number-div").hide();A(v+" > div#s2member-pro-paypal-checkout-form-card-start-date-issue-number-div :input").attr(b);A(I+" > div.s2member-pro-paypal-checkout-form-div").show();A(I+" > div.s2member-pro-paypal-checkout-form-div :input").attr(x);(!t)?y.hide():null;A(o+" input#s2member-pro-paypal-checkout-submit").replaceWith(g);(R)?A(v+" input#s2member-pro-paypal-checkout-card-number").focus():null}else{if(A.inArray(S,["Maestro","Solo"])!==-1){A(v).show(),A(I).show();A(v+" > div.s2member-pro-paypal-checkout-form-div").show();A(v+" > div.s2member-pro-paypal-checkout-form-div :input").attr(x);A(I+" > div.s2member-pro-paypal-checkout-form-div").show();A(I+" > div.s2member-pro-paypal-checkout-form-div :input").attr(x);(!t)?y.hide():null;A(o+" input#s2member-pro-paypal-checkout-submit").replaceWith(g);(R)?A(v+" input#s2member-pro-paypal-checkout-card-number").focus():null}else{if((!S||S==="PayPal")&&t){A(v).show(),A(I).show();A(v+" > div.s2member-pro-paypal-checkout-form-div").show();A(v+" > div.s2member-pro-paypal-checkout-form-div :input").attr(x);A(v+" > div#s2member-pro-paypal-checkout-form-card-number-div").hide();A(v+" > div#s2member-pro-paypal-checkout-form-card-number-div :input").attr(b);A(v+" > div#s2member-pro-paypal-checkout-form-card-expiration-div").hide();A(v+" > div#s2member-pro-paypal-checkout-form-card-expiration-div :input").attr(b);A(v+" > div#s2member-pro-paypal-checkout-form-card-verification-div").hide();A(v+" > div#s2member-pro-paypal-checkout-form-card-verification-div :input").attr(b);A(v+" > div#s2member-pro-paypal-checkout-form-card-start-date-issue-number-div").hide();A(v+" > div#s2member-pro-paypal-checkout-form-card-start-date-issue-number-div :input").attr(b);A(I+" > div.s2member-pro-paypal-checkout-form-div").show();A(I+" > div.s2member-pro-paypal-checkout-form-div :input").attr(x);A(I+" > div#s2member-pro-paypal-checkout-form-street-div").hide();A(I+" > div#s2member-pro-paypal-checkout-form-street-div :input").attr(b);A(I+" > div#s2member-pro-paypal-checkout-form-city-div").hide();A(I+" > div#s2member-pro-paypal-checkout-form-city-div :input").attr(b);A(o+" input#s2member-pro-paypal-checkout-submit").replaceWith(h);(R)?A(I+" input#s2member-pro-paypal-checkout-state").focus():null}else{if(!S||S==="PayPal"){A(v).show(),A(I).hide();A(v+" > div.s2member-pro-paypal-checkout-form-div").hide();A(v+" > div.s2member-pro-paypal-checkout-form-div :input").attr(b);A(v+" > div#s2member-pro-paypal-checkout-form-card-type-div").show();A(v+" > div#s2member-pro-paypal-checkout-form-card-type-div :input").attr(x);A(I+" > div.s2member-pro-paypal-checkout-form-div").hide();A(I+" > div.s2member-pro-paypal-checkout-form-div :input").attr(b);A(o+" input#s2member-pro-paypal-checkout-submit").replaceWith(h);(R)?A(o+" input#s2member-pro-paypal-checkout-submit").focus():null}}}}}})();A(m).click(u).change(u);A(P).click(function(){A(l).val("apply-coupon"),q.submit()});A(N+" > div#s2member-pro-paypal-checkout-form-password-div :input").keyup(function(){ws_plugin__s2member_passwordStrength(A(N+" input#s2member-pro-paypal-checkout-username"),A(N+" input#s2member-pro-paypal-checkout-password1"),A(N+" input#s2member-pro-paypal-checkout-password2"),A(N+" div#s2member-pro-paypal-checkout-form-password-strength"))});q.submit(function(){if(A.inArray(A(l).val(),["option","apply-coupon"])===-1){var U=this,S="",R="",X="";var T=A(O+" input#recaptcha_response_field");var W=A(N+' input#s2member-pro-paypal-checkout-password1[aria-required="true"]');var V=A(N+" input#s2member-pro-paypal-checkout-password2");if(!A(m+":checked").val()){A(m).val(["PayPal"])}A(":input",U).each(function(){var Y=A.trim(A(this).attr("id")).replace(/---[0-9]+$/g,"");if(Y&&(S=A.trim(A('label[for="'+Y.replace(/-(month|year)/,"")+'"]',U).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(R=ws_plugin__s2member_validationErrors(S,this,U)){X+=R+"\n\n"}}});if(X=A.trim(X)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+X);return false}else{if(W.length&&A.trim(W.val())!==A.trim(V.val())){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Passwords do not match up. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(W.length&&A.trim(W.val()).length<6){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Password MUST be at least 6 characters. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(T.length&&!T.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq (_x ("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}}}}A(d).attr(B),ws_plugin__s2member_animateProcessing(A(d)),A(P).attr(B);return true})}}}}}(L=function(){A("div#s2member-pro-paypal-form-response").each(function(){var R=A(this).offset();window.scrollTo(0,R.top-100)})})()});