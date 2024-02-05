import { useState } from "react";
import Header from "./Header";

import classNames from 'classnames';
import useSticky from './useSticky';
import Page from './Page'

const Content = () => {

const sections = [
    {
      title: "home",
      subtitle: "Displaying the home content"
    },
    {
      title: "about",
      subtitle: "Displaying the about content"
    },
    {
      title: "project",
      subtitle: "Displaying the project content"
    },
    {
      title: "contact",
      subtitle: "Displaying the contact content"
    }
  ];

  const menus = ["home", "education", "work", "projects", "lab", "contact"];

  const { sticky, stickyRef } = useSticky();
  const [visibleSection, setVisibleSection] = useState(menus[0]);


return (
    <>

<div className="main__wrapper">
  <main>
    <div className="title">
        <img  src="assets/images/dog.png" alt="Logo" />
        <div>
            <h1>Hi, I'm Sampath. I design & build user interfaces.</h1>
        </div>
    </div>
    <aside ref={stickyRef} className={classNames('nav', { sticky })}>
      <div>
            <Header menus={menus} visibleSection={visibleSection}  />
      </div>
    </aside>

    {sticky && (
        <div
          style={{
            height: `${stickyRef.current?.clientHeight}px`
          }}
        />
      )}


        {menus.map((menu, index) => (
            <Page {...{ menu, setVisibleSection }} key={index} />
        ))}

  </main>
</div>
    </>
)

}

export default Content;