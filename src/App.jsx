import { useState } from 'react'
import {Animator, ScrollContainer, ScrollPage, Sticky, Zoom, Fade, batch, MoveOut, FadeIn, ZoomIn, StickyIn, Move, MoveIn} from 'react-scroll-motion';
import './App.css'


function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky(), Move());
  
  return (
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <h2>Let me show you some scroll animation 😀</h2>
          </Animator>
        </ScrollPage>

        <ScrollPage> 
          <Animator animation={ZoomInScrollOut}>
            <h2>I'm a Full Stack Python Developer 💻</h2>
          </Animator>
        </ScrollPage>

        <ScrollPage> 
          <Animator animation={FadeUp}>
            <h2>Open to Work 🏢</h2>
          </Animator>
        </ScrollPage>

        <ScrollPage> 
          <div className="section-3">
            <h2>
              <Animator animation={MoveIn(-1000, 0)}>Front-end</Animator>
              <Animator animation={MoveIn(1000, 0)}>Back-end</Animator>
              <Animator animation={MoveOut(1000, 0)}>Git, GitHub</Animator>
              <Animator animation={MoveOut(-1000, 0)}>Programmer</Animator>
            </h2>
          </div>
        </ScrollPage>

        <ScrollPage> 
          <Animator animation={batch(FadeUp, Sticky())}>
            <h2>Done ✅</h2>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
  )
}

export default App
