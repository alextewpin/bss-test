import ReactDOM from 'react-dom';

import Header    from 'Header';
import Nav       from 'Nav';
import Transfer  from 'Transfer';
import Footer    from 'Footer';

import Menu          from 'Menu';
import CardSelector  from 'CardSelector';
import Input         from 'Input';
import Textarea      from 'Textarea';
import Checkbox      from 'Checkbox';
import Button        from 'Button';

import Layout        from '_utils/Layout';
import Row           from '_utils/Row';

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

export default class Spitfire extends React.Component {
  componentDidMount () {
    this.renderFrameContents();
  }
  componentDidUpdate () {
    this.renderFrameContents();
  }
  createReactElement (item, props) {
    if (typeof item === 'string') {
      return React.createElement(lib[item], props);
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
      const container = document.createElement('div');
      container.id = 'app';
      doc.body.appendChild(container);
      ReactDOM.render(this.createReactElement(data), container);
      cssLinks.forEach(link => {
        const linkTag = document.createElement('link');
        linkTag.rel = 'stylesheet';
        linkTag.href = link;
        doc.head.appendChild(linkTag);
      });
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
