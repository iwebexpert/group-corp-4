import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import {configure} from 'enzyme'

require('jest-fetch-mock').enableMocks()
configure({adapter: new Adapter()})