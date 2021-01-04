import React from "react"
import Switch from '../../components/Switch';
import Guide from '../../components/Guide';
import CodeRenderer from '../../components/CodeRenderer';
import CodeFragment from '../../components/CodeFragment';
import { files, codeFragments } from '../../tutorials-data/switch-button';
import FullPageContainer from '../../components/FullPageContainer';
// import { Disqus } from 'gatsby-plugin-disqus';

const SwitchButtonTutorial = (props) => (
    <FullPageContainer className="tutorial">
        <Guide url={props.location.href} identifier="dw1d12ckec1cda219kc" title="Switch button tutorial">
            <h1 onMouseEnter={() => console.log('PROPSY:', props)}>Switch button</h1>
            <h2>Simple switch button, styled as theme changer</h2>
            <div className="guide__component-wrapper">
                <Switch />
            </div>
            <p>In this tutorial you will learn how to recreate this very basic switch button using framer motion's <code>layout</code> prop, fontawesome free icons and some simple css code. I styled the component as a theme changing button, but of course you can easily change its purpuose by picking different gradients or icons.</p>
            <p>On the right side of the page you can see completed component's code, both js component and css stylesheet. Next steps will show you how to create such a button step by step.</p>
            <p>Let's start with necessary imports and simple functional component with some basic state logic, which we will use later to store button's state and change its style accordingly.</p>
            <CodeFragment language="javascript">
                {codeFragments[0]}
            </CodeFragment>
            <p>There's not much to explain at the moment. Class names speak for themselves: <code>container</code> is the container with gradient background, and <code>handle</code> is... well, the handle. Lets wire up some logic to the container so we can toggle the state by clicking the button.</p>
            <CodeFragment language="javascript">
                {codeFragments[1]}
            </CodeFragment>
            <p>That looks better! Now, by clicking the button we can change its state to the opposite. Also, we added some conditional styling. If button is on - handle will be justified to the right corner. If not, it will stick to the left. <code>data-darkmode</code> allows us to change button's background via css attribute selector. Well, at this point we have perfectly working button, but there aren't any animations. Everything will change, when we add one magic prop to handle...</p>
            <CodeFragment language="javascript">
                {codeFragments[2]}
            </CodeFragment>
            <p>That's all! Handle's <code>layout</code> prop does all the magic for us. Of course, to make it working we had to make handle a motion component, instead of regular div. By setting <code>layout</code> to true on a motion component, we made it automatically animating any layout changes. So, everything should make sense now. By clicking on the button we switch its state. Justification is dependent on the state, so it changes to the opposite aswell, now with nice, smooth animation. Now, there is only one thing left to implement - icons on the handle.</p>
            <CodeFragment language="javascript">
                {codeFragments[3]}
            </CodeFragment>
            <p>By adding <code>i</code> tag with conditional classes we make icons change as we toggle the button. But there is still nothing animating on our handle. Let's change that.</p>
            <CodeFragment language="javascript">
                {codeFragments[4]}
            </CodeFragment>
            <p>As you can see, a lot has changed so let me explain everything step by step. For now, ignore <code>AnimatePresence</code> component. Firstly, we had to convert <code>i</code> to a motion component, to make anything animate.</p>
            <p>Our animation is defined by objects that we pass as <code>initial</code>, <code>animate</code> and <code>exit</code> props. <code>initial</code> prop describes the initial state of animation. If we set it to false, we can disable mount animation, which we actually did in <code>AnimatePresence</code>, but we will talk about it later. So, by setting <code>y</code> to -30 and <code>opacity</code> to 0 we say that we want our component to be shifted by 30px on Y axis and to be transparent at the beginning of the animation. Pretty simple.</p>
            <p><code>animate</code> prop describes the actual animation. Whenever it changes, component will animate to new values. It will also animate when component mounts, but as I mentioned, we disabled that in <code>AnimatePresence</code>.</p>
            <p><code>exit</code> prop is responsible for... exit animation. Exit animations are possible because we wrapped our icon with <code>AnimatePresence</code>.</p>
            <p>In <code>transition</code> we specify duration of the animation. Not much to explain.</p>
            <p>So, let's finally explain what's that <code>AnimatePresence</code> and why we need it. Basically, we use it to animate components when they are removed from the React tree. Component must be inside <code>AnimatePresence</code> to have exit prop and unmount animation. <code>key</code> prop which we passed to icon is crucial for <code>AnimatePresence</code>. All of it's child components must have unique <code>key</code>, so <code>AnimatePresence</code> is able to track their presence in the tree.</p>
            <p>And, finally, let's talk about <code>AnimatePresence</code> props. As you might guessed, by setting <code>initial</code> to false, we disabled icon's mount animation. <code>exitBeforeEnter</code> does pretty much exactly what its name says. If set to true, <code>AnimatePresence</code> will render only one component at a time, and wait for exiting component's animation to be finished before rendering new entering component.</p>
            <h2>Useful links</h2>
            <ul>
                <li><a href="https://www.framer.com/api/motion/animate-presence/" target="_blank">AnimatePresence documentation</a></li>
            </ul>
        </Guide>
        <div className="code__wrapper">
            <CodeRenderer files={files} />
        </div>
    </FullPageContainer>
)

export default SwitchButtonTutorial
