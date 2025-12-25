import PropType from "prop-types"
import Colors from './Colors';
import './Typography.css';

function Typography({ children, componentType, color = Colors.default, background = Colors.backgroundDefault }) {
  const style = {
    ...color,
    ...background,
  };
  switch (componentType) {
    case 'h1':
      return (
        <span style={color} className="component-h1">{children}</span>);
    case 'h3':
      return (
        <span style={style} className="component-h3">{children}</span>);
    case 'h5':
      return (
        <span style={style} className="component-h5">{children}</span>);
    case 'paragraph':
      return (<p style={style} className="component-h3">{children}</p>);
    case 'span':
    default:
      return <span style={style}>{children}</span>;
  }
}

Typography.proptype ={
    children: PropType.element.isRequired,
    componentType: PropType.string.isRequired,
    color: PropType.string,
    background: PropType.string,
}

export default Typography;
