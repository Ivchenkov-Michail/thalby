import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ModalStyles from '../ModalWindow/index.module.scss'
import FormSubscribe from './FormSubscribe'

describe('Form testing', () => {
  beforeEach(() => {
    render(<FormSubscribe />)
  })
  test('First Name input in the document', () => {
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
  })
  test('Last Name input in the document', () => {
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
  })
  test('Email input in the document', () => {
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  test('Email is required', async () => {
    const button = screen.getByRole('button', { name: 'Subscribe' })
    await userEvent.click(button)
    expect(screen.getByText('Email is required')).toBeInTheDocument()
  })
  test('Email invalid address', async () => {
    const email = screen.getByPlaceholderText('Email')
    const button = screen.getByRole('button', { name: 'Subscribe' })

    await userEvent.type(email, 'email@dfdfd')
    await userEvent.click(button)
    expect(screen.getByText('Invalid email address'))

    await userEvent.clear(email)

    await userEvent.type(email, 'emaildfdfd.dfdfd')
    await userEvent.click(button)
    expect(screen.getByText('Invalid email address'))
  })

  test('Null First Name form focused', async () => {
    const name = screen.getByPlaceholderText('First Name')
    const button = screen.getByRole('button', { name: 'Subscribe' })

    await userEvent.click(button)
    expect(name).toHaveFocus()
  })

  test('Null Last Name form focused', async () => {
    const name = screen.getByPlaceholderText('First Name')
    const last = screen.getByPlaceholderText('Last Name')
    const button = screen.getByRole('button', { name: 'Subscribe' })

    await userEvent.type(name, 'Name')

    await userEvent.click(button)
    expect(last).toHaveFocus()
  })

  test('Form Tab', async () => {
    const name = screen.getByPlaceholderText('First Name')
    const last = screen.getByPlaceholderText('Last Name')
    const email = screen.getByPlaceholderText('Email')
    const button = screen.getByRole('button', { name: 'Subscribe' })

    name.focus()
    await userEvent.tab()
    expect(last).toHaveFocus()

    await userEvent.tab()
    expect(email).toHaveFocus()

    await userEvent.tab()
    expect(button).toHaveFocus()
  })

  test('Currect submit form', async () => {
    const name = screen.getByPlaceholderText('First Name')
    const last = screen.getByPlaceholderText('Last Name')
    const email = screen.getByPlaceholderText('Email')
    const button = screen.getByRole('button', { name: 'Subscribe' })

    await userEvent.type(name, 'Name')
    await userEvent.type(last, 'Last')
    await userEvent.type(email, 'Currect@email.com')

    await userEvent.click(button)

    expect(name).toHaveValue('')
    expect(last).toHaveValue('')
    expect(email).toHaveValue('')
    await waitFor(() => {
      expect(screen.getByTestId('Modal')).toHaveClass(ModalStyles.visible)
    })
  })
})
