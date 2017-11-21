import styled from 'styled-components'

export const ToggleTrackCheck = styled.div`
  position: absolute;
  width: 14px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  left: 8px;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;n
  transition: opacity 0.25s ease;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
`

ToggleTrackCheck.displayName = 'ToggleTrackCheck'

export const ToggleInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

ToggleInput.displayName = 'ToggleInput'

export const ToggleTrack = styled.div`
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
`
ToggleTrack.displayName = 'ToggleTrack'

export const ToggleThumb = styled.div`
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border: 1px solid #4D4D4D;
  border-radius: 50%;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;
`

ToggleThumb.displayName = 'ToggleThumb'

export const ToggleTrackX = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  right: 10px;
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
`

ToggleTrackX.displayName = 'ToggleTrackX'

export const Toggle = styled.div`
  touch-action: pan-x;

  display: inline-block;
  position: relative;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity:  ${props => props.disabled ? '0.5' : '1'};
  background-color: transparent;
  border: 0;
  padding: 0;

  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;

  margin-right: 8px;
  vertical-align: middle;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  ${ToggleTrack} {
    background-color: ${props => props.checked ? props.theme.checkedBg : props.theme.notCheckedBg};
  }

  ${ToggleTrack}:hover {
    background-color: ${props => {
      if (props.checked && !props.disabled) { return props.theme.checkedBgHover }
      if (!props.checked && !props.disabled) { return props.theme.notCheckedBgHover }
    }};
  }
  
  ${ToggleTrackCheck} {
    opacity: ${props => props.checked ? '1' : '0'};
  }

  ${ToggleTrackX} {
    opacity: ${props => props.checked ? '0' : '1'};
  }

  ${ToggleThumb} {
    left: ${props => props.checked ? '27px' : '1px'}; 
    -webkit-box-shadow: ${props => props.focus ? '0px 0px 3px 2px #0099E0' : ''};  
    -moz-box-shadow: ${props => props.focus ? '0px 0px 3px 2px #0099E0' : ''};  
    box-shadow: ${props => props.focus ? '0px 0px 3px 2px #0099E0' : ''};  
    border-color: ${props => props.checked ? props.theme.checkedBorder : props.theme.notCheckedBorder};
    background-color: ${props => props.theme.thumbBg};
  }
`

Toggle.defaultProps = {
  theme: {
    checkedBg: '#19AB27',
    checkedBgHover: '#128D15',
    notCheckedBg: '#4D4D4D',
    notCheckedBgHover: '#000000',
    checkedBorder: '#19AB27',
    notCheckedBorder: '#4D4D4D',
    thumbBg: '#FAFAFA',
  },
}
