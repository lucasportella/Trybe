    // App.test.js
    import React from 'react';
    import { render, fireEvent } from '@testing-library/react';
    import App from './App';
    
    test('Verificando se existe o campo Email.', () => {
      const { getByLabelText } = render(<App />);
      const inputEmail = getByLabelText('Email');
      expect(inputEmail).toBeInTheDocument();
      expect(inputEmail.type).toBe('email');
    });

    test('Verificando se existe dois botões', () => {
      const { getAllByRole } = render(<App />);
      const buttons = getAllByRole('button');
      expect(buttons.length).toBe(2);
    });

    test('testando eventos', () => {
      const { getByLabelText, getByTestId } = render(<App />);
      const inputEmail = getByLabelText('Email');
      const inputBtn = getByTestId('id-send');
      const textH2 = getByTestId('id-email-user');

      fireEvent.change(inputEmail, { target: { value: 'algumEmail@gmail.com'}})
      fireEvent.click(inputBtn)

      expect(inputEmail.value).toBe('')
      expect(textH2.textContent).toBe('Valor: algumEmail@gmail.com')
    })

