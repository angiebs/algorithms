using System;
using System.Collections.Generic;

namespace PatternObserver
{
    //Class subject
    public class Temperature : IObservable
    {
        private List<IObserver> _observers = new List<IObserver>();
        private decimal _tempState;

        public decimal TemperatureValue {
            get { return _tempState; }
            set
            {
                if (_tempState != value)
                {
                    _tempState = value;
                    Notify();
                }
            }
        }

        // Constructor
        public Temperature(decimal temp)
        {
            this.TemperatureValue = temp;
        }

        public void Subscribe(IObserver observer)
        {
            _observers.Add(observer);
        }

        public void Unsubscribe(IObserver observer)
        {
            _observers.Remove(observer);
        }

        public void Notify()
        {
            foreach (IObserver observer in _observers)
            {
                observer.Update(this);
            }
        }
    }
}
