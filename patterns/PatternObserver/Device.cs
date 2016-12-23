using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatternObserver
{
    //Concrete Subject
    class Device : IObserver
    {
        private string _name;

        public string Name
        {
            get { return this._name; }
        }

        public Device(string name)
        {
            this._name = name;
        }

        public void Update(Temperature subject)
        {
            Console.WriteLine("Notified {0}'of {1}'s change",
              _name, subject.TemperatureValue);
        }
    }
}
