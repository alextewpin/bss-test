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

const lib = {
  Header,
  Nav,
  Transfer,
  Footer,
  Checkbox,
  Input,
  Row,
  Layout
};

const data = {
  element: 'Layout',
  children: [
    'Header',
    'Nav',
    'Transfer',
    {
      element: 'Row',
      children: [
        'Input',
        'Input'
      ]
    },
    'Checkbox',
    'Footer'
  ]
};

class Spitfire extends React.Component {
  componentDidMount () {
    this.renderFrameContents();
  }
  componentDidUpdate () {
    this.renderFrameContents();
  }
  componentWillUnmount () {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).contentDocument.body);
  }
  createReactElement (item, props) {
    if (typeof item === 'string') {
      if (lib[item]) {
        return React.createElement(lib[item], props);
      } else {
        return <div className={styles.stub}>{item}</div>;
      }
    } else {
      const children = item.children.map((child, i) => {
        return (
          <div key={i}>
            {this.createReactElement(child)}
          </div>
        );
      });
      return React.createElement(lib[item.element], { children });
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
