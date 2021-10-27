import pytest
from arquivo1 import is_even, divide_by_zero

def test_is_even():
    'Retorna True se um número é ímpar, senão False.'
    assert is_even(2) is True

def test_is_even_fail():
    with pytest.raises(AssertionError, match="assert False is True"):
        assert is_even(3) is True

def test_divide_by_zero_throws_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide_by_zero(2)
