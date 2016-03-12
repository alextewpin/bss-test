import ReactDOM      from 'react-dom';

import { isSafari }  from '_utils/common';

import Header        from 'Header';
import Nav           from 'Nav';
import Transfer      from 'Transfer';
import Footer        from 'Footer';
import Menu          from 'Menu';

import CardSelector  from 'CardSelector';
import Input         from 'Input';
import Textarea      from 'Textarea';
import Checkbox      from 'Checkbox';
import Button        from 'Button';

import Layout        from '_utils/Layout';
import Row           from '_utils/Row';

import styles        from './styles.scss';

function Group ({ children }) {
  return <div className={styles.group}>{children}</div>;
}

function Stub ({ title }) {
  return <div className={styles.stub}><div className={styles.stub__title}>{title}</div></div>;
}

function StubWithChildren ({ title, children }) {
  const _children = (children.length > 0) ? <div className={styles.stub__children}>{children}</div> : null;
  return (
    <div className={styles.stub}>
      <div className={styles.stub__title}>{title}</div>
      {_children}
    </div>
  );
}

const lib = {
  // General
  Header,
  Nav,
  Transfer,
  Footer,
  Menu,
  // Forms
  Button,
  CardSelector,
  Checkbox,
  Input,
  Textarea,
  // Layout
  Row,
  Layout,
  g: Group
};

class Spitfire extends React.Component {
  static propTypes = {
    data: React.PropTypes.object
  }
  componentDidMount () {
    this.renderFrameContents();
  }
  componentDidUpdate () {
    this.renderFrameContents();
  }
  componentWillUnmount () {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).contentDocument.getElementById('app'));
  }
  createReactElement (item, props) {
    if (typeof item === 'string') {
      if (lib[item] && item !== 'g') {
        return React.createElement(lib[item], props);
      } else {
        return <Stub title={item} {...props}/>;
      }
    } else {
      const children = item.children.map((child, i) => {
        return this.createReactElement(child, { key: i });
      });
      if (lib[item.element]) {
        return React.createElement(lib[item.element], Object.assign({}, { children }, props));
      } else {
        return <StubWithChildren title={item.element} children={children} {...props}/>;
      }
    }
  }
  renderFrameContents () {
    const doc = ReactDOM.findDOMNode(this).contentDocument;
    const cssLinks = [
      'https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic,cyrillic-ext,vietnamese,greek-ext,latin-ext,greek', // eslint-disable-line max-len
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css',
      'main.css'
    ];
    if (doc.readyState === 'complete') {
      if (!doc.getElementById('app')) {
        const container = doc.createElement('div');
        container.id = 'app';
        doc.body.appendChild(container);
        cssLinks.forEach(link => {
          const linkTag = document.createElement('link');
          linkTag.rel = 'stylesheet';
          linkTag.href = link;
          doc.head.appendChild(linkTag);
        });
      }
      const container = doc.getElementById('app');
      let renderedElement;
      if (isSafari()) {
        renderedElement = <div className={styles.error}>В Сафари пока ничего не работает. Попробуйте Хром.</div>;
      } else {
        renderedElement = this.createReactElement(this.props.data);
      }
      ReactDOM.render(renderedElement, container);
    } else {
      setTimeout(this.renderFrameContents, 0);
    }
  }
  render () {
    return (
      <iframe style={{ width: '100%' }}/>
    );
  }
}

export default ReactCSS(Spitfire, styles);
