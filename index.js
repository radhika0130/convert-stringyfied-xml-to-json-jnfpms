import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import convert from 'xml-js';

var xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE GSP SYSTEM "google.dtd">
<GSP VER="3.2">
   <TM>0.410438</TM>
   <Q>iphone</Q>
   <PARAM js_escaped_value="iphone" name="q" original_value="iphone" url_escaped_value="iphone" value="iphone" />
   <PARAM js_escaped_value="0" name="start" original_value="0" url_escaped_value="0" value="0" />
   <PARAM js_escaped_value="10" name="num" original_value="10" url_escaped_value="10" value="10" />
   <PARAM js_escaped_value="en" name="hl" original_value="en" url_escaped_value="en" value="en" />
   <PARAM js_escaped_value="xml" name="output" original_value="xml" url_escaped_value="xml" value="xml" />
   <PARAM js_escaped_value="comcastpc-experiments" name="client" original_value="comcastpc-experiments" url_escaped_value="comcastpc-experiments" value="comcastpc-experiments" />
   <PARAM js_escaped_value="utf8" name="ie" original_value="utf8" url_escaped_value="utf8" value="utf8" />
   <PARAM js_escaped_value="utf8" name="oe" original_value="utf8" url_escaped_value="utf8" value="utf8" />
   <PARAM js_escaped_value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36" name="useragent" original_value="Mozilla%2F5.0+%28Windows+NT+10.0%3B+Win64%3B+x64%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F113.0.0.0+Safari%2F537.36" url_escaped_value="Mozilla/5.0+(Windows+NT+10.0%3B+Win64%3B+x64)+AppleWebKit/537.36+(KHTML,+like+Gecko)+Chrome/113.0.0.0+Safari/537.36" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36" />
   <PARAM js_escaped_value="204.2.243.116" name="ip" original_value="204.2.243.116" url_escaped_value="204.2.243.116" value="204.2.243.116" />
   <PARAM js_escaped_value="medium" name="adsafe" original_value="medium" url_escaped_value="medium" value="medium" />
   <CT />
   <RES EN="10" SN="1">
      <M>5730000000</M>
      <FI />
      <NB>
         <NU>/search?q=iphone&amp;client=comcastpc-experiments&amp;hl=en&amp;output=xml&amp;ie=UTF-8&amp;oe=UTF-8&amp;prmd=ivnsbm&amp;ei=Fy5-ZOvcGIu4qtsPs6ik6AY&amp;start=10&amp;sa=N</NU>
      </NB>
      <R N="1">
         <U>https://www.apple.com/iphone/</U>
         <UE>https://www.apple.com/iphone/</UE>
         <T>&lt;b&gt;iPhone&lt;/b&gt; - Apple</T>
         <S>interact with &lt;b&gt;iPhone&lt;/b&gt;. Emergency SOS via satellite. Emergency SOS. Crash Detection. Pro camera system. 48MP Main Ultra Wide Telephoto Photonic Engine for&amp;nbsp;...</S>
         <LANG>en</LANG>
         <OSLN NUM="4">
            <OSL N="1">
               <U>https://www.apple.com/iphone/compare/</U>
               <T>Compare iPhone models</T>
            </OSL>
            <OSL N="2">
               <U>https://www.apple.com/iphone/buy/</U>
               <T>Why buy iPhone anywhere else?</T>
            </OSL>
            <OSL N="3">
               <U>https://www.apple.com/iphone-se/</U>
               <T>iPhone SE</T>
            </OSL>
            <OSL N="4">
               <U>https://www.apple.com/iphone-14/</U>
               <T>iPhone 14</T>
            </OSL>
         </OSLN>
         <HAS>
            <L />
            <C CID="JIjFa1byZv4J" SZ="303k" />
            <RT />
         </HAS>
      </R>
      <R L="2" N="2">
         <U>https://www.apple.com/shop/buy-iphone</U>
         <UE>https://www.apple.com/shop/buy-iphone</UE>
         <T>Buy &lt;b&gt;iPhone&lt;/b&gt; - Apple</T>
         <S>Shop the latest iPhone models and accessories. Save with Apple Trade In,&amp;nbsp;...</S>
         <LANG>en</LANG>
         <HAS>
            <L />
            <C CID="ItHrPomqKi8J" SZ="484k" />
            <RT />
         </HAS>
      </R>
      <R L="2" N="3">
         <U>https://www.apple.com/iphone/compare/</U>
         <UE>https://www.apple.com/iphone/compare/</UE>
         <T>Compare &lt;b&gt;iPhone&lt;/b&gt; models - Apple</T>
         <S>Compare features and technical specifications for the iPhone 14 Pro,&amp;nbsp;...</S>
         <LANG>en</LANG>
         <HAS>
            <L />
            <RT />
         </HAS>
      </R>
      <R N="4">
         <U>https://en.wikipedia.org/wiki/IPhone</U>
         <UE>https://en.wikipedia.org/wiki/IPhone</UE>
         <T>&lt;b&gt;iPhone&lt;/b&gt; - Wikipedia</T>
         <CRAWLDATE>5 hours ago</CRAWLDATE>
         <TIMESTAMP>20230605-06d1117</TIMESTAMP>
         <S>&lt;b&gt;iPhone&lt;/b&gt; is a line of smartphones produced by Apple Inc. that use Apple&amp;#39;s own iOS mobile operating system. The first-generation &lt;b&gt;iPhone&lt;/b&gt; was announced by&amp;nbsp;...</S>
         <LANG>en</LANG>
         <OSLN NUM="4">
            <OSL N="1">
               <U>https://en.wikipedia.org/wiki/IPhone#History</U>
               <T>History</T>
            </OSL>
            <OSL N="2">
               <U>https://en.wikipedia.org/wiki/IPhone#Models</U>
               <T>Models</T>
            </OSL>
            <OSL N="3">
               <U>https://en.wikipedia.org/wiki/IPhone#Software</U>
               <T>Software</T>
            </OSL>
            <OSL N="4">
               <U>https://en.wikipedia.org/wiki/IPhone#Privacy</U>
               <T>Privacy</T>
            </OSL>
         </OSLN>
         <HAS>
            <L />
            <C CID="5ebNzZs41sEJ" SZ="535k" />
            <RT />
         </HAS>
      </R>
      <R N="5">
         <U>https://www.bestbuy.com/site/mobile-cell-phones/iphone/pcmcat305200050000.c?id=pcmcat305200050000</U>
         <UE>https://www.bestbuy.com/site/mobile-cell-phones/iphone/pcmcat305200050000.c%3Fid%3Dpcmcat305200050000</UE>
         <T>New Apple &lt;b&gt;iPhones&lt;/b&gt; &amp;amp; Accessories - Best Buy</T>
         <S>Shop Best Buy for the latest Apple &lt;b&gt;iPhone&lt;/b&gt; and accessories. Check out the newest &lt;b&gt;iPhone&lt;/b&gt; or compare other &lt;b&gt;iPhone&lt;/b&gt; models.</S>
         <LANG>en</LANG>
         <HAS>
            <L />
            <C CID="oFGNKqUqBPwJ" SZ="984k" />
            <RT />
         </HAS>
      </R>
      <R N="6">
         <U>https://www.amazon.com/iphone/s?k=iphone</U>
         <UE>https://www.amazon.com/iphone/s%3Fk%3Diphone</UE>
         <T>Iphone - Amazon.com</T>
         <S>&lt;b&gt;iPhone&lt;/b&gt; 13 Pro &amp;middot; &lt;b&gt;iPhone&lt;/b&gt; 13 &amp;middot; &lt;b&gt;iPhone&lt;/b&gt; 13 mini &amp;middot; 2022 &lt;b&gt;iPhone&lt;/b&gt; SE, End of {header} list. 2022 &lt;b&gt;iPhone&lt;/b&gt; SE. More results. Best Seller. Apple &lt;b&gt;iPhone&lt;/b&gt; 11, US Version,&amp;nbsp;...</S>
         <LANG>en</LANG>
         <HAS>
            <L />
            <C CID="riAVehhu__QJ" SZ="680k" />
            <RT />
         </HAS>
      </R>
      <R N="7">
         <U>https://www.macrumors.com/roundup/iphone-15/</U>
         <UE>https://www.macrumors.com/roundup/iphone-15/</UE>
         <T>&lt;b&gt;iPhone&lt;/b&gt; 15: Launch Date, Features, and Rumors - MacRumors</T>
         <BYLINEDATE>1685084400</BYLINEDATE>
         <S>May 26, 2023 &lt;b&gt;...&lt;/b&gt; The 2023 &lt;b&gt;iPhone&lt;/b&gt; 15 models are expected to feature USB-C instead of Lightning, faster modem chips, upgraded camera technology, and more.</S>
         <LANG>en</LANG>
         <HAS>
            <L />
            <C CID="PvHz9c3e4GYJ" SZ="205k" />
            <RT />
         </HAS>
      </R>
      <R N="8">
         <U>https://www.t-mobile.com/cell-phones/brand/apple</U>
         <UE>https://www.t-mobile.com/cell-phones/brand/apple</UE>
         <T>Newest Apple &lt;b&gt;iPhones&lt;/b&gt; for Sale: See Pricing &amp;amp; More ... - T-Mobile</T>
         <S>Shop the latest Apple &lt;b&gt;iPhones&lt;/b&gt; for sale today. Explore pricing and features for all available models, including the new &lt;b&gt;iPhone&lt;/b&gt; 14, &lt;b&gt;iPhone&lt;/b&gt; 14 Pro Max,&amp;nbsp;...</S>
         <LANG>en</LANG>
         <HAS>
            <L />
            <RT />
         </HAS>
      </R>
      <R N="9">
         <U>https://appleinsider.com/inside/iphone</U>
         <UE>https://appleinsider.com/inside/iphone</UE>
         <T>&lt;b&gt;iPhone&lt;/b&gt; | Pro, Plus, Max - AppleInsider</T>
         <S>The &lt;b&gt;iPhone&lt;/b&gt; spurred the smartphone revolution and continues to dominate the market today. Learn more here.</S>
         <LANG>en</LANG>
         <HAS>
            <L />
            <C CID="r5EzhmGGmxIJ" SZ="292k" />
            <RT />
         </HAS>
      </R>
      <R N="10">
         <U>https://www.wired.com/tag/iphone/</U>
         <UE>https://www.wired.com/tag/iphone/</UE>
         <T>&lt;b&gt;IPhone&lt;/b&gt; | Latest News, Photos &amp;amp; Videos | WIRED</T>
         <S>Find the latest &lt;b&gt;Iphone&lt;/b&gt; news from WIRED. See related science and technology articles, photos, ... How to Find Downloaded Files on an &lt;b&gt;iPhone&lt;/b&gt; or Android Phone.</S>
         <LANG>en</LANG>
         <HAS>
            <L />
            <C CID="Mecdh9uIz_QJ" SZ="828k" />
            <RT />
         </HAS>
      </R>
   </RES>
   <LOCATION_FOOTER>
      <LOCATION>United States</LOCATION>
      <SOURCE>FROM_YOUR_INTERNET_ADDRESS</SOURCE>
   </LOCATION_FOOTER>
</GSP>
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      finalArr: [],
    };
  }

  ComponentDidMount() {
    const json = convert.xml2js(xml);
    var eleArray = json.elements[1].elements.map((eleObj) => {
      if (eleObj.name === 'RES') {
        var resultArr = eleObj.elements.map((eleInObj) => {
          if (eleInObj.name === 'R') {
            return eleInObj;
          }
        });

        this.setState({ finalArr: transform(resultArr) }, () => {
          console.log(this.state.finalArr);
        });
      }
    });
  }

  render() {
    return (
      <>
        <h3 class="title">
          <a href="" target="_blank">
            {/* <raw html="<b>ndnjd</b>">tyyy</raw> */}
          </a>
        </h3>
        <div class="source">
          6286484
          <span>- 327638</span>
          <a href="" target="_blank">
            {' '}
            - Cached{' '}
          </a>
          <a
            // if={opts.data.similar}
            // onclick={searchSimilar(opts.data.similar)}
            target="_blank"
          >
            - Similar pages{' '}
          </a>
        </div>
        {/* <raw class="summary" html="hbshjcsc">
          hcbd
        </raw> */}
      </>
    );
  }
}

function transform(arr) {
  return arr.reduce((memo, item) => {
    if (typeof item !== 'undefined') {
      if (Array.isArray(item)) item = transform(item);
      // We can transform item here.
      memo.push(item);
    }
    return memo;
  }, []);
}

render(<App />, document.getElementById('root'));
