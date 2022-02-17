import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { sortBy } from 'lodash'

import { routesData } from './routesData'
import Button from '../components/Button'
import Table from '../components/Table'
import Checkbox from '../components/Checkbox'
import Radio from '../components/Radio'
import ToggleSwitch from '../components/ToggleSwitch'
import Textarea from '../components/Textarea'
import TextInput from '../components/TextInput'
import Tag from '../components/Tag'
import EditableTag from '../components/EditableTag'
import OutlineTag from '../components/OutlineTag';
import FieldLabel from '../components/FieldLabel'
import InstructionText from '../components/InstructionText'
import SelectBox from '../components/SelectBox'
import Typography from '../components/Typography'
import Modal from '../components/Modal'
import SkeletonTile from '../components/SkeletonTile'
// import Table from '../components/Table'
// import FieldLabel from '../components/FieldLabel'
// import TextInput from '../components/TextInput'
// import Notification from '../components/Notification'
// import HelpText from '../components/HelpText'
// import ValidationMessage from '../components/ValidationMessage'
// import Typography from '../components/Typography'
// import TextInput from '../components/TextInput'
import Dropdown from '../components/Dropdown'
import Tooltip from '../components/Tooltip'
import Icon from '../components/Icon'
import Accordion from '../components/Accordion';
import AssetCardVertical from '../components/AssetCardVertical';
import Carousel from '../components/Carousel';
import ColorPicker from '../components/ColorPicker';
import Field from '../components/Field'
import Search from '../components/Search'
// import PageLayout from '../components/PageLayout'
// import PageHeader from '../components/PageHeader'
// import Tabs from '../components/Tabs'

const Home = () => {
  const sortedRoutes = sortBy(routesData, 'label')
  return (
    <div style={{ margin: '30px' }}>
      <h1> Venus Ui </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexDirection: 'column',
          height: `${40 * sortedRoutes.length - 1}px`,
          fontSize: '20px',
          color: '#010101',
          margin: '30px',
        }}
      >
        {sortedRoutes.map(
          (data, i) =>
            data.label !== 'Home' && (
              <div key={data.uid}>
                <Link to={data.route} style={{ textDecoration: 'none' }}>
                  {i + 1}. {data.label}
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  )
}

const routesObj = {
  Home,
  Button,
  TextInput,
  Tag,
  EditableTag,
  OutlineTag,
  Textarea,
  FieldLabel,
  InstructionText,
  Checkbox,
  Radio,
  ToggleSwitch,
  SelectBox,
  Table,
  Typography,
  Modal,
  Dropdown,
  Icon,
  SkeletonTile,
  Tooltip,
  Accordion,
  AssetCardVertical,
  Carousel,
  ColorPicker,
  Field,
  Search,
  // Table,
  // FieldLabel,
  // PageLayout,
  // PageHeader,
  // Tabs,
  // TextInput,
  // Notification,
  // HelpText,
  // ValidationMessage,
  // Typography,
  //
}

const AppRouteSetUp = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (rest.path !== '/') {
        return (
          <div
            style={{
              fontSize: '20px',
            }}
          >
            <div style={{ margin: '30px' }}>
              <Link to="/">Home</Link> &gt; {rest.label}
            </div>
            <div style={{ margin: '30px' }}>
              <Component {...props} />
            </div>
          </div>
        )
      }
      return <Component {...props} />
    }}
  />
)

const RouteComponent = ({ component }) => {
  let Component = routesObj[component]
  return <Component />
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routesData.map(data => {
          return (
            <AppRouteSetUp
              exact={data.exact}
              key={data.uid}
              path={data.route}
              label={data.label}
              component={() => <RouteComponent component={data.component} />}
            />
          )
        })}
        <Route component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes
