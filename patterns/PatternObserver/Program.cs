using System;

namespace PatternObserver
{
    static class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Observer Pattern");

            Temperature tempMonitor = new Temperature(20);
            tempMonitor.Subscribe(new Device("Device A"));
            tempMonitor.Subscribe(new Device("Device B"));
            tempMonitor.Subscribe(new Device("Device C"));

            tempMonitor.TemperatureValue = 30;
            tempMonitor.TemperatureValue = 50;
            tempMonitor.TemperatureValue = 60;
        }
    }
}
