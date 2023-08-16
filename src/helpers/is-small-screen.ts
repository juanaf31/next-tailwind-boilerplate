import isBrowser from './is-browser'

function isSmallScreen(): boolean {
  return isBrowser() && window.innerWidth < 1024
}

export default isSmallScreen
