
import { expect } from 'chai'
import { hasParentLabel, hasIdThatMatchesLabelFor, hasAriaLabelOrAriaLabelledbyAttr, checkForLabel } from '../src/component/util'

describe('utils', () => {

  describe('hasParentLabel util', () => {

    it('will return false if there isn\'t a node.parentNode', () => {
      // Arrange
      const mockElement = {
        parentNode: null,
      }

      // Act
      const result = hasParentLabel(mockElement)

      // Assert
      expect(result).to.be.false
    })

    it('will return true if there is a node.parentNode and', () => {
      // Arrange
      const mockTagName = 'David Bowie'
      const mockElement = {
        parentNode: {
          nodeName: 'David Bowie',
        },
      }

      // Act
      const result = hasParentLabel(mockElement, mockTagName)

      // Assert
      expect(result).to.be.true
    })

    it('will recursively call itself until there is no parentNode', () => {
      // Arrange
      const mockTagName = 'Prince'
      const mockElement = {
        parentNode: {
          nodeName: 'David Bowie',
          parentNode: {
            nodeName: 'Billy Corgan',
            parentNode: {
              nodeName: 'Jack White',
              parentNode: null,
            },
          },
        },
      }

      // Act
      const result = hasParentLabel(mockElement, mockTagName)

      // Assert
      expect(result).to.be.false
    })

    it('will recursively call itself until the parentNode.nodeName equals the given tag name', () => {
      // Arrange
      const mockTagName = 'Prince'
      const mockElement = {
        parentNode: {
          nodeName: 'David Bowie',
          parentNode: {
            nodeName: 'Billy Corgan',
            parentNode: {
              nodeName: 'Jack White',
              parentNode: {
                nodeName: 'Prince',
              },
            },
          },
        },
      }

      // Act
      const result = hasParentLabel(mockElement, mockTagName)

      // Assert
      expect(result).to.be.true
    })
  }) // End describe hasParentlabel util

  describe('hasIdThatMatchesLabelFor util', () => {

    it('will return false if the node does not have an id', () => {
      // Arrange
      const mockElement = {
        id: '',
      }

      // Act
      const result = hasIdThatMatchesLabelFor(mockElement)

      // Assert
      expect(result).to.be.false
    })

    it('will return false if node.id is not in any nodes returned by document.querySelectorAll', () => {
      // Arrange
      const mockElement = {
        id: 'space-oddity',
      }
      const mockDocumentObj = {
        querySelectorAll: () => [],
      }

      // Act
      const result = hasIdThatMatchesLabelFor(mockElement, mockDocumentObj)

      // Assert
      expect(result).to.be.false
    })

    it('will return true if node.id is in any nodes returned by document.querySelectorAll', () => {
      // Arrange
      const mockElement = {
        id: 'raspberry-beret',
      }
      const mockLabelNode = {
        htmlFor: 'raspberry-beret',
      }
      const mockDocumentObj = {
        querySelectorAll: () => [mockLabelNode],
      }

      // Act
      const result = hasIdThatMatchesLabelFor(mockElement, mockDocumentObj)

      // Assert
      expect(result).to.be.true
    })
  })

  describe('hasAriaLabelOrAriaLabelledbyAttr util', () => {

    it('will return false if the element does not have the aria-label or aria-labelledby attribute', () => {
      // Arrange
      const mockElement = {
        getAttribute: () => null,
      }

      // Act
      const result = hasAriaLabelOrAriaLabelledbyAttr(mockElement)

      // Assert
      expect(result).to.be.false
    })

    it('will return true if the element has the aria-label attribute', () => {
      // Arrange
      const mockElement = {
        getAttribute: (attr) => attr === 'aria-label',
      }

      // Act
      const result = hasAriaLabelOrAriaLabelledbyAttr(mockElement)

      // Assert
      expect(result).to.be.true
    })

    it('will return true if the element has the aria-labelledby attribute', () => {
      // Arrange
      const mockElement = {
        getAttribute: (attr) => attr === 'aria-labelledby',
      }

      // Act
      const result = hasAriaLabelOrAriaLabelledbyAttr(mockElement)

      // Assert
      expect(result).to.be.true
    })
  })
})
